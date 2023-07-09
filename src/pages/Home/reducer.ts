export const UPDATE_CITY_LIST = 'UPDATE_CITY_LIST';
export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';

interface HomeState {
  isLoading: boolean;
  searchText: string;
  citiesList: {
    value: string;
    label: string;
  }[];
}

export const initialState: HomeState = {
  isLoading: false,
  searchText: '',
  citiesList: [],
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
    default: {
      return initialState;
    }
  }
};

export default homeReducer;
