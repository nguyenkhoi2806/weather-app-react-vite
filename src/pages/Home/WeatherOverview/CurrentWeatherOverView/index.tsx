import moment from 'moment';

import CurrentWeather from '@/interfaces/CurrentWeather';

import Style from './current-weather.module.scss';

interface CurrentWeatherOverViewProps {
  currentWeather: CurrentWeather;
}

const CurrentWeatherOverView = (props: CurrentWeatherOverViewProps) => {
  const { currentWeather } = props;

  return (
    <div className={Style['current-weather']}>
      <div className={Style['current-weather__item']}>
        <span>{currentWeather?.city}</span>
        <span className={Style['current-weather__item-time']}>
          {moment().calendar()}
        </span>
      </div>
      <div className={Style['current-weather__item']}>
        <span className="font-bold">{currentWeather?.temperature} °C</span>
        <span className={Style['current-weather__item-time']}>
          {currentWeather?.description}
        </span>
      </div>
      <div className={Style['current-weather__item']}>
        <img src={`/images/${currentWeather.icon}.png`} alt="weather" />
      </div>
    </div>
  );
};

export default CurrentWeatherOverView;
