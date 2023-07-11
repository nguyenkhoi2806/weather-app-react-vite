import Forecast from '@/interfaces/Forecast';

import Style from '../today-forecast.module.scss';

interface ForecastItemProps {
  forecast: Forecast;
}

const ForecastItem = (props: ForecastItemProps) => {
  const { forecast } = props;
  return (
    <div className={Style['today-forecast__item']}>
      <span className={Style['today-forecast__item-time']}>
        {forecast.time}
      </span>
      <img src={`/images/${forecast.icon}.png`} alt={forecast.icon} />
      <span className={Style['today-forecast__item-temperature']}>
        {forecast.temperature}
      </span>
    </div>
  );
};

export default ForecastItem;
