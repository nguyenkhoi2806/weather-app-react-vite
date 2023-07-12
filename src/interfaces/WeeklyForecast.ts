interface WeeklyForecast {
  date: string;
  temperature: number;
  clouds: number;
  icon: string;
  description: string;
  humidity: number;
  wind: number;
}

export function groupBy(key: string) {
  return function group(array: any[]) {
    return array.reduce((acc, obj) => {
      const property = obj[key];
      const { date, ...rest } = obj;
      acc[property] = acc[property] || [];
      acc[property].push(rest);
      return acc;
    }, {});
  };
}

export function getAverage(array: any[], isRound = true) {
  let average = 0;
  if (isRound) {
    average = Math.round(array.reduce((a, b) => a + b, 0) / array.length);
    if (average === 0) {
      average = 0;
    }
  } else
    average = Number(
      (array.reduce((a, b) => a + b, 0) / array.length).toFixed(2)
    );

  return average;
}

export function getMostFrequentWeather(array: any[]) {
  const hashmap = array.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(hashmap).reduce((a, b) =>
    hashmap[a] > hashmap[b] ? a : b
  );
}

export const formatWeekForecastWeatherFromApi = (response: any) => {
  const forecastData: any = [];
  const descriptionsData: any = [];

  if (Object.keys(response).length === 0) {
    return [];
  }

  response?.list.slice().map((item: any, idx: number) => {
    descriptionsData.push({
      description: item.weather[0].description,
      date: item.dt_txt.substring(0, 10),
    });
    forecastData.push({
      date: item.dt_txt.substring(0, 10),
      temp: item.main.temp,
      humidity: item.main.humidity,
      wind: item.wind.speed,
      clouds: item.clouds.all,
      icon: item.weather[0].icon,
    });

    return { idx, item };
  });

  const groupByDate = groupBy('date');
  const groupedForecastData = groupByDate(forecastData);
  const groupedForecastDescriptions = groupByDate(descriptionsData);

  const descriptionKey = Object.keys(groupedForecastDescriptions);

  const dayDescList: any[] = [];

  descriptionKey.forEach((key) => {
    const singleDayDescriptions = groupedForecastDescriptions[key].map(
      (item: any) => item.description
    );
    const mostFrequentDescription = getMostFrequentWeather(
      singleDayDescriptions
    );
    dayDescList.push(mostFrequentDescription);
  });
  const forecast_keys = Object.keys(groupedForecastData);
  const dayAvgList: WeeklyForecast[] = [];

  forecast_keys.forEach((key, idx) => {
    const dayTempsList = [];
    const dayHumidityList = [];
    const dayWindList = [];
    const dayCloudsList = [];
    let icon = '';

    for (let i = 0; i < groupedForecastData[key].length; i += 1) {
      dayTempsList.push(groupedForecastData[key][i].temp);
      dayHumidityList.push(groupedForecastData[key][i].humidity);
      dayWindList.push(groupedForecastData[key][i].wind);
      dayCloudsList.push(groupedForecastData[key][i].clouds);
      icon = groupedForecastData[key][i].icon;
    }

    dayAvgList.push({
      date: key,
      temperature: getAverage(dayTempsList),
      humidity: getAverage(dayHumidityList),
      wind: getAverage(dayWindList, false),
      clouds: getAverage(dayCloudsList),
      description: dayDescList[idx],
      icon,
    });
  });

  return dayAvgList;
};

export default WeeklyForecast;
