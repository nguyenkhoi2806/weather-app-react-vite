import Select from 'react-select';

import Header from './Header';
import StyleHomes from './home.module.scss';
import WeatherOverview from './WeatherOverview';

const Home = () => {
  return (
    <div className={StyleHomes['home-container']}>
      <Header />
      <Select className="my-5" />
      <WeatherOverview />
    </div>
  );
};

export default Home;
