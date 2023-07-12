import AirCondition from '@/interfaces/AirCondition';
import CurrentWeather from '@/interfaces/CurrentWeather';
import Forecast from '@/interfaces/Forecast';
import WeeklyForecast from '@/interfaces/WeeklyForecast';

export const UPDATE_CITY_LIST = 'UPDATE_CITY_LIST';
export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';
export const UPDATE_LOADING_WEATHER = 'UPDATE_LOADING_WEATHER';
export const UPDATE_CURRENT_WEATHER = 'UPDATE_CURRENT_WEATHER';
export const UPDATE_AIR_CONDITION = 'UPDATE_AIR_CONDITION';
export const UPDATE_IS_ERROR = 'UPDATE_IS_ERROR';
export const UPDATE_FORECAST_LIST = 'UPDATE_FORECAST_LIST';
export const UPDATE_WEEKLY_FORECAST_LIST = 'UPDATE_WEEKLY_FORECAST_LIST';

interface HomeState {
  isError: boolean;
  isLoadingWeather: boolean;
  searchText: string;
  citiesList: {
    value: string;
    label: string;
  }[];
  currentWeather: CurrentWeather | null;
  airCondition: AirCondition | null;
  forecastTodayList: Forecast[];
  weeklyForecastList: WeeklyForecast[];
}

export const initialState: HomeState = {
  isError: false,
  isLoadingWeather: false,
  searchText: '',
  citiesList: [],
  currentWeather: null,
  airCondition: null,
  forecastTodayList: [],
  weeklyForecastList: [],
};

type HomeActions = {
  type: string;
  payload: any; // eslint-disable-line
};

const homeReducer = (state: HomeState, action: HomeActions) => {
  switch (action.type) {
    case UPDATE_CITY_LIST: {
      return {
        ...state,
        citiesList: action.payload,
      };
    }
    case UPDATE_SEARCH_TEXT: {
      return {
        ...state,
        searchText: action.payload,
      };
    }
    case UPDATE_LOADING_WEATHER: {
      return {
        ...state,
        isLoadingWeather: action.payload,
        isError: false,
      };
    }
    case UPDATE_CURRENT_WEATHER: {
      return {
        ...state,
        currentWeather: action.payload,
      };
    }
    case UPDATE_AIR_CONDITION: {
      return {
        ...state,
        airCondition: action.payload,
      };
    }
    case UPDATE_IS_ERROR: {
      return {
        ...state,
        isError: action.payload,
      };
    }
    case UPDATE_FORECAST_LIST: {
      return {
        ...state,
        forecastTodayList: action.payload,
      };
    }
    case UPDATE_WEEKLY_FORECAST_LIST: {
      return {
        ...state,
        weeklyForecastList: action.payload,
      };
    }
    default: {
      return initialState;
    }
  }
};

export default homeReducer;
