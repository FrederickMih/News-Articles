import {
  FETCH_CUSTOM_NEWS,
  FETCH_TECH_CRUNCH,
  SEARCH_ARTICLE,
} from '../actions/newsActions';

const initialState = {
  source: [],
  newsArts: [],
  newsArt: [],
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOM_NEWS:
      return {
        ...state,
        source: action.payload,
      };

    case FETCH_TECH_CRUNCH:
      return {
        ...state,
        newsArts: action.payload,
      };

    case SEARCH_ARTICLE:
      return {
        ...state,
        newsArt: action.payload,
      };

    default:
      return state;
  }
};

export default articleReducer;
