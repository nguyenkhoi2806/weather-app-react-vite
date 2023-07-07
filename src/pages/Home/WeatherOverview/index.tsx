import AirCondition from './AirConditions';
import CurrentWeather from './CurrentWeather';
import TodayForecast from './TodayForecast';
import Style from './weather-overview.module.scss';
import Weekly from './Weekly';

const WeatherOverview = () => {
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
