import Forecast from '@/interfaces/Forecast';

import ForecastItem from './ForecastItem';
import Style from './today-forecast.module.scss';

interface TodayForecastProps {
  forecastTodayList: Forecast[];
}

const TodayForecast = (props: TodayForecastProps) => {
  const { forecastTodayList } = props;
  return (
    <div className={Style['today-forecast']}>
      <span className={Style['today-forecast__available']}>
        {forecastTodayList.length} available forecasts
      </span>
      <div className={Style['today-forecast__items']}>
        {forecastTodayList.map((forecastToday) => (
          <ForecastItem forecast={forecastToday} key={forecastToday.time} />
        ))}
      </div>
    </div>
  );
};

export default TodayForecast;
