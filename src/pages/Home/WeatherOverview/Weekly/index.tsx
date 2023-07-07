import { BsFillCloudFill } from 'react-icons/bs';
import { CiCloud, CiTempHigh } from 'react-icons/ci';
import { LuWind } from 'react-icons/lu';
import { WiHumidity } from 'react-icons/wi';

import { WeeklyDay, WeeklyItem } from './style';

const Weekly = () => {
  return (
    <WeeklyItem>
      <WeeklyDay>
        <span className="WeeklyDay__day">Saturday</span>
        <span className="WeeklyDay__type">
          <CiCloud />
          <span className="WeeklyDay__type-text">overcast cloud</span>
        </span>
      </WeeklyDay>
      <WeeklyDay>
        <span className="WeeklyDay__type">
          <CiTempHigh />
          <span className="WeeklyDay__type-text">28 °C</span>
        </span>
        <span className="WeeklyDay__type">
          <BsFillCloudFill />
          <span className="WeeklyDay__type-text">81 %</span>
        </span>
      </WeeklyDay>
      <WeeklyDay>
        <span className="WeeklyDay__type">
          <LuWind />
          <span className="WeeklyDay__type-text">2.61 m/s</span>
        </span>
        <span className="WeeklyDay__type">
          <WiHumidity />
          <span className="WeeklyDay__type-text">83 %</span>
        </span>
      </WeeklyDay>
    </WeeklyItem>
  );
};

export default Weekly;
