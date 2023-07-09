import { WiDayFog } from 'react-icons/wi';

import Loading from '@/components/Loading';
import CurrentWeather from '@/interfaces/CurrentWeather';

import AirCondition from './AirConditions';
import CurrentWeatherOverView from './CurrentWeatherOverView';
import TodayForecast from './TodayForecast';
import Style from './weather-overview.module.scss';
import Weekly from './Weekly';

interface WeatherOverviewProps {
  isLoading: boolean;
  currentWeather: CurrentWeather;
}

const WeatherOverview = (props: WeatherOverviewProps) => {
  const { isLoading, currentWeather } = props;

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loading />
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
        <AirCondition />
        <span className={Style['weather-container__current-title']}>
          Today's forecast
        </span>
        <TodayForecast />
      </div>
      <div className={Style['weather-container__weekly']}>
        <span className={Style['weather-container__weekly-title']}>
          WEEKLY FORECAST
        </span>
        <div className={Style['weather-container__weekly-list']}>
          <Weekly />
          <Weekly />
          <Weekly />
          <Weekly />
          <Weekly />
          <Weekly />
          <Weekly />
        </div>
      </div>
    </div>
  );
};

export default WeatherOverview;
