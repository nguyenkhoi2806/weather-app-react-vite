import moment from 'moment';

interface Forecast {
  time: string;
  icon: string;
  temperature: string;
}

export const formatForecastListFromApi = (response: any) => {
  const todayForecast: Forecast[] = [];
  const date = new Date();
  const currentDateTime = Math.floor(date.getTime() / 1000);
  const currentDate = moment().format('YYYY-MM-DD');

  if (Object.keys(response).length === 0) {
    return [];
  }
  response.list.slice().map((item: any) => {
    if (item.dt_txt.startsWith(currentDate)) {
      if (item.dt > currentDateTime) {
        todayForecast.push({
          time: item.dt_txt.split(' ')[1].substring(0, 5),
          icon: item.weather[0].icon,
          temperature: `${Math.round(item.main.temp)} °C`,
        });
      }
    }
    return todayForecast;
  });

  if (todayForecast.length < 7) {
    return [...todayForecast];
  }
  return todayForecast.slice(-6);
};

export default Forecast;
