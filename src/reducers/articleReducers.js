import {
  FETCH_CUSTOM_NEWS,
  FETCH_TECH_CRUNCH,
  LOADING_ARTICLE,
  SEARCH_ARTICLE,
} from '../actions/newsActions';

const initialState = {
  source: [],
  loading: false,
  initialScreeen: true,
  articles: [],
  article: [],
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
        articles: action.payload,
      };

    case SEARCH_ARTICLE:
      return {
        ...state,
        article: action.payload,
      };

    case LOADING_ARTICLE:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default articleReducer;
