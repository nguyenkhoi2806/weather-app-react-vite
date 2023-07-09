const { VITE_WEATHER_API_URL, VITE_WEATHER_API_KEY } = import.meta.env;

export async function fetchWeatherData(lat: number, long: number) {
  try {
    const [weatherPromise, forecastPromise] = await Promise.all([
      fetch(
        `${VITE_WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&appid=${VITE_WEATHER_API_KEY}&units=metric`
      ),
      fetch(
        `${VITE_WEATHER_API_URL}/forecast?lat=${lat}&lon=${long}&appid=${VITE_WEATHER_API_KEY}&units=metric`
      ),
    ]);

    const weatherResponse = await weatherPromise.json();
    const forecastResponse = await forecastPromise.json();
    return [weatherResponse, forecastResponse];
  } catch (error) {
    return [];
  }
}
