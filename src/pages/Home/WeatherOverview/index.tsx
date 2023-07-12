import { WiDayFog } from 'react-icons/wi';

import Loading from '@/components/Loading';
import AirConditionModel from '@/interfaces/AirCondition';
import CurrentWeather from '@/interfaces/CurrentWeather';
import Forecast from '@/interfaces/Forecast';
import WeeklyForecast from '@/interfaces/WeeklyForecast';

import AirCondition from './AirConditions';
import CurrentWeatherOverView from './CurrentWeatherOverView';
import TodayForecast from './TodayForecast';
import Style from './weather-overview.module.scss';
import Weekly from './Weekly';

interface WeatherOverviewProps {
  isLoading: boolean;
  currentWeather: CurrentWeather;
  airCondition: AirConditionModel;
  isError: boolean;
  forecastTodayList: Forecast[];
  weeklyForecastList: WeeklyForecast[];
}

const WeatherOverview = (props: WeatherOverviewProps) => {
  const {
    isLoading,
    currentWeather,
    airCondition,
    isError,
    forecastTodayList,
    weeklyForecastList,
  } = props;

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center text-white h-96 items-center">
        Ops! there is something wrong please try again
      </div>
    );
  }

  if (!currentWeather) {
    return (
      <span className="text-white flex justify-center flex-col items-center h-96 text-center ">
        <WiDayFog size={100} className="mb-10" />
        Explore current weather data and 6-day forecast of more than 200,000
        cities!
      </span>
    );
  }

  return (
    <div className={Style['weather-container']}>
      <div className={Style['weather-container__current']}>
        <span className={Style['weather-container__current-title']}>
          CURRENT WEATHER
        </span>
        <CurrentWeatherOverView currentWeather={currentWeather} />
        <span className={Style['weather-container__current-title']}>
          Air Condition
        </span>
        <AirCondition airCondition={airCondition} />
        <span className={Style['weather-container__current-title']}>
          Today's forecast
        </span>
        <TodayForecast forecastTodayList={forecastTodayList} />
      </div>
      <div className={Style['weather-container__weekly']}>
        <span className={Style['weather-container__weekly-title']}>
          WEEKLY FORECAST
        </span>
        <div className={Style['weather-container__weekly-list']}>
          {weeklyForecastList.map((weeklyItem) => (
            <Weekly key={weeklyItem.date} weeklyForecast={weeklyItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherOverview;
