import Loading from '@/components/Loading';

import AirCondition from './AirConditions';
import CurrentWeather from './CurrentWeather';
import TodayForecast from './TodayForecast';
import Style from './weather-overview.module.scss';
import Weekly from './Weekly';

interface WeatherOverviewProps {
  isLoading: boolean;
}

const WeatherOverview = (props: WeatherOverviewProps) => {
  const { isLoading } = props;

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className={Style['weather-container']}>
      <div className={Style['weather-container__current']}>
        <span className={Style['weather-container__current-title']}>
          CURRENT WEATHER
        </span>
        <CurrentWeather />
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
