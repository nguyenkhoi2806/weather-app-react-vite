import { BiCloud } from 'react-icons/bi';
import { CiTempHigh } from 'react-icons/ci';
import { PiWindLight } from 'react-icons/pi';
import { WiHumidity } from 'react-icons/wi';

import AirConditionModel from '@/interfaces/AirCondition';

import Style from './air-conditions.module.scss';

interface AirConditionProps {
  airCondition: AirConditionModel;
}

const AirCondition = (props: AirConditionProps) => {
  const { airCondition } = props;
  return (
    <div className={Style['air-condition']}>
      <div className={Style['air-condition__item']}>
        <span className={Style['air-condition__item-title']}>
          <CiTempHigh size={25} />
          Real Feel
        </span>
        <span className={Style['air-condition__item-content']}>
          {airCondition.realFeel} °C
        </span>
      </div>
      <div className={Style['air-condition__item']}>
        <span className={Style['air-condition__item-title']}>
          <PiWindLight size={25} />
          Wind
        </span>
        <span className={Style['air-condition__item-content']}>
          {airCondition.wind} m/s
        </span>
      </div>
      <div className={Style['air-condition__item']}>
        <span className={Style['air-condition__item-title']}>
          <BiCloud size={25} />
          Clouds
        </span>
        <span className={Style['air-condition__item-content']}>
          {airCondition.clouds} %
        </span>
      </div>
      <div className={Style['air-condition__item']}>
        <span className={Style['air-condition__item-title']}>
          <WiHumidity size={25} />
          Humidity
        </span>
        <span className={Style['air-condition__item-content']}>
          {airCondition.humidity} %
        </span>
      </div>
    </div>
  );
};

export default AirCondition;
