import { BsFillCloudFill } from 'react-icons/bs';
import { CiTempHigh } from 'react-icons/ci';
import { LuWind } from 'react-icons/lu';
import { WiHumidity } from 'react-icons/wi';

import WeeklyForecast from '@/interfaces/WeeklyForecast';

import { WeeklyDay, WeeklyItem } from './style';

interface WeeklyProps {
  weeklyForecast: WeeklyForecast;
}

const Weekly = (props: WeeklyProps) => {
  const { weeklyForecast } = props;
  return (
    <WeeklyItem>
      <WeeklyDay>
        <span className="WeeklyDay__day">{weeklyForecast.date}</span>
        <span className="WeeklyDay__type">
          <img
            className="WeeklyDay__img"
            src={`images/${weeklyForecast.icon}.png`}
            alt={weeklyForecast.date}
          />
          <span className="WeeklyDay__type-text">
            {weeklyForecast.description}
          </span>
        </span>
      </WeeklyDay>
      <WeeklyDay>
        <span className="WeeklyDay__type">
          <CiTempHigh />
          <span className="WeeklyDay__type-text">
            {weeklyForecast.temperature} °C
          </span>
        </span>
        <span className="WeeklyDay__type">
          <BsFillCloudFill />
          <span className="WeeklyDay__type-text">
            {weeklyForecast.clouds} %
          </span>
        </span>
      </WeeklyDay>
      <WeeklyDay>
        <span className="WeeklyDay__type">
          <LuWind />
          <span className="WeeklyDay__type-text">
            {weeklyForecast.wind} m/s
          </span>
        </span>
        <span className="WeeklyDay__type">
          <WiHumidity />
          <span className="WeeklyDay__type-text">
            {weeklyForecast.humidity} %
          </span>
        </span>
      </WeeklyDay>
    </WeeklyItem>
  );
};

export default Weekly;
