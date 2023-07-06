import ForecastItem from './ForecastItem';
import Style from './today-forecast.module.scss';

const TodayForecast = () => {
  return (
    <div className={Style['today-forecast']}>
      <span className={Style['today-forecast__available']}>
        2 available forecasts
      </span>
      <div className={Style['today-forecast__items']}>
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
      </div>
    </div>
  );
};

export default TodayForecast;
