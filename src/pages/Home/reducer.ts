import CurrentWeather from '@/interfaces/CurrentWeather';

export const UPDATE_CITY_LIST = 'UPDATE_CITY_LIST';
export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';
export const UPDATE_LOADING_WEATHER = 'UPDATE_LOADING_WEATHER';
export const UPDATE_CURRENT_WEATHER = 'UPDATE_CURRENT_WEATHER';

interface HomeState {
  isLoadingWeather: boolean;
  searchText: string;
  citiesList: {
    value: string;
    label: string;
  }[];
  currentWeather: CurrentWeather | null;
}

export const initialState: HomeState = {
  isLoadingWeather: false,
  searchText: '',
  citiesList: [],
  currentWeather: null,
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
      };
    }

    case UPDATE_CURRENT_WEATHER: {
      return {
        ...state,
        currentWeather: action.payload,
      };
    }
    default: {
      return initialState;
    }
  }
};

export default homeReducer;
