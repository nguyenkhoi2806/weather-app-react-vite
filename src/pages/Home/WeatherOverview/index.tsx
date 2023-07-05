import AirCondition from './AirConditions';
import CurrentWeather from './CurrentWeather';
import Style from './weather-overview.module.scss';

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
      </div>
      <div className={Style['weather-container__weekly']}>
        <span className={Style['weather-container__weekly-title']}>
          CURRENT WEATHER
        </span>
      </div>
    </div>
  );
};

export default WeatherOverview;
