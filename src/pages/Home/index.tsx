import Search from '@/components/Search';

import Header from './Header';
import StyleHomes from './home.module.scss';

const Home = () => {
  return (
    <div className={StyleHomes['home-container']}>
      <Header />
      <Search />
    </div>
  );
};

export default Home;
