import { BsCloudLightningRainFill } from 'react-icons/bs';

import Style from '../today-forecast.module.scss';

const ForecastItem = () => {
  return (
    <div className={Style['today-forecast__item']}>
      <span className={Style['today-forecast__item-time']}>18:00</span>
      <BsCloudLightningRainFill size={34} />
      <span className={Style['today-forecast__item-temperature']}>23 °C</span>
    </div>
  );
};

export default ForecastItem;
