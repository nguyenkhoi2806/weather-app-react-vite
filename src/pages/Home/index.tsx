import { useCallback, useEffect, useReducer } from 'react';
import Select from 'react-select';

import { getCities } from '@/api/location';
import { fetchWeatherData } from '@/api/weather';
import useDebounce from '@/hooks/useDebounce';
import City from '@/interfaces/City';
import { formatForecastListFromApi } from '@/interfaces/Forecast';

import Header from './Header';
import StyleHomes from './home.module.scss';
import HomeReducer, {
  initialState,
  UPDATE_AIR_CONDITION,
  UPDATE_CITY_LIST,
  UPDATE_CURRENT_WEATHER,
  UPDATE_FORECAST_LIST,
  UPDATE_IS_ERROR,
  UPDATE_LOADING_WEATHER,
  UPDATE_SEARCH_TEXT,
} from './reducer';
import WeatherOverview from './WeatherOverview';

const Home = () => {
  const [state, dispatch] = useReducer(HomeReducer, initialState);
  const {
    searchText,
    citiesList,
    isLoadingWeather,
    currentWeather,
    airCondition,
    isError,
    forecastTodayList,
  } = state;

  const searchTextWithDebounced = useDebounce(searchText, 500);

  const loadCities = useCallback(async () => {
    if (searchTextWithDebounced) {
      const cities = await getCities(searchTextWithDebounced);
      dispatch({
        type: UPDATE_CITY_LIST,
        payload: cities.map((city: City) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        })),
      });
    }
  }, [searchTextWithDebounced]);

  const searchCities = async (value: string) => {
    dispatch({
      type: UPDATE_SEARCH_TEXT,
      payload: value,
    });
  };

  useEffect(() => {
    loadCities();
  }, [searchTextWithDebounced, loadCities]);

  const viewWeatherDetail = async (location: any) => {
    try {
      const [latitude, longitude] = location.value.split(' ');
      dispatch({ type: UPDATE_LOADING_WEATHER, payload: true });
      const [todayWeatherResponse, weekForecastResponse] =
        await fetchWeatherData(Number(latitude), Number(longitude));

      dispatch({
        type: UPDATE_CURRENT_WEATHER,
        payload: {
          city: location.label,
          temperature: todayWeatherResponse.main.temp,
          icon: todayWeatherResponse.weather[0].icon,
          description: todayWeatherResponse.weather[0].description,
        },
      });

      dispatch({
        type: UPDATE_AIR_CONDITION,
        payload: {
          realFeel: todayWeatherResponse.main.feels_like,
          wind: todayWeatherResponse.wind.speed,
          clouds: todayWeatherResponse.clouds.all,
          humidity: todayWeatherResponse.main.humidity,
        },
      });

      dispatch({
        type: UPDATE_FORECAST_LIST,
        payload: formatForecastListFromApi(weekForecastResponse),
      });
      // console.log(weekForecastResponse);
      dispatch({ type: UPDATE_LOADING_WEATHER, payload: false });
    } catch (_) {
      dispatch({ type: UPDATE_IS_ERROR, payload: false });
    }
  };

  return (
    <div className={StyleHomes['home-container']}>
      <Header />
      <Select
        options={citiesList}
        onInputChange={searchCities}
        onChange={viewWeatherDetail}
        inputValue={searchText}
        className="my-5"
      />
      <WeatherOverview
        isLoading={isLoadingWeather}
        currentWeather={currentWeather}
        airCondition={airCondition}
        forecastTodayList={forecastTodayList}
        isError={isError}
      />
    </div>
  );
};

export default Home;
