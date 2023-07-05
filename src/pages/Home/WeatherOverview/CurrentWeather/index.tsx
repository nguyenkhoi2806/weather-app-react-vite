import cloud from '/images/few_cloud.png';

import Style from './current-weather.module.scss';

const CurrentWeather = () => {
  return (
    <div className={Style['current-weather']}>
      <div className={Style['current-weather__item']}>
        <span>MUNICH, DE</span>
        <span className={Style['current-weather__item-time']}>Today 5 Jul</span>
      </div>
      <div className={Style['current-weather__item']}>
        <span>19 °C</span>
        <span className={Style['current-weather__item-time']}>
          overcast clouds
        </span>
      </div>
      <div className={Style['current-weather__item']}>
        <img src={cloud} width={70} alt="weather" />
      </div>
    </div>
  );
};

export default CurrentWeather;
