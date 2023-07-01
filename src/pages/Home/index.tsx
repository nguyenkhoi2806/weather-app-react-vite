import Header from './Header';
import StyleHomes from './home.module.scss';

const Home = () => {
  return (
    <div className={StyleHomes['home-container']}>
      <Header />
    </div>
  );
};

export default Home;
