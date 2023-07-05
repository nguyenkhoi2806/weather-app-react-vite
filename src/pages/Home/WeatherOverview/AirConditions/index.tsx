import Style from './air-conditions.module.scss';

const AirCondition = () => {
  return (
    <div className={Style['air-condition']}>
      <div className={Style['air-condition__item']}>
        <span className={Style['air-condition__item-title']}>Real Feel</span>
        <span className={Style['air-condition__item-content']}>19 °C</span>
      </div>
      <div className={Style['air-condition__item']}>
        <span className={Style['air-condition__item-title']}>Wind</span>
        <span className={Style['air-condition__item-content']}>0.45 m/s</span>
      </div>
      <div className={Style['air-condition__item']}>
        <span className={Style['air-condition__item-title']}>Clouds</span>
        <span className={Style['air-condition__item-content']}>96 %</span>
      </div>
      <div className={Style['air-condition__item']}>
        <span className={Style['air-condition__item-title']}>Humidity</span>
        <span className={Style['air-condition__item-content']}>82 %</span>
      </div>
    </div>
  );
};

export default AirCondition;
