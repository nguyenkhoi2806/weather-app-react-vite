import { BiCloud } from 'react-icons/bi';
import { CiTempHigh } from 'react-icons/ci';
import { PiWindLight } from 'react-icons/pi';
import { WiHumidity } from 'react-icons/wi';

import Style from './air-conditions.module.scss';

const AirCondition = () => {
  return (
    <div className={Style['air-condition']}>
      <div className={Style['air-condition__item']}>
        <span className={Style['air-condition__item-title']}>
          <CiTempHigh size={25} className="mr-1" />
          Real Feel
        </span>
        <span className={Style['air-condition__item-content']}>19 °C</span>
      </div>
      <div className={Style['air-condition__item']}>
        <span className={Style['air-condition__item-title']}>
          <PiWindLight size={25} className="mr-1" />
          Wind
        </span>
        <span className={Style['air-condition__item-content']}>0.45 m/s</span>
      </div>
      <div className={Style['air-condition__item']}>
        <span className={Style['air-condition__item-title']}>
          <BiCloud size={25} className="mr-1" />
          Clouds
        </span>
        <span className={Style['air-condition__item-content']}>96 %</span>
      </div>
      <div className={Style['air-condition__item']}>
        <span className={Style['air-condition__item-title']}>
          <WiHumidity size={25} className="mr-1" />
          Humidity
        </span>
        <span className={Style['air-condition__item-content']}>82 %</span>
      </div>
    </div>
  );
};

export default AirCondition;
