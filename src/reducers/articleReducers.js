import {
  FETCH_CUSTOM_NEWS,
  FETCH_TECH_CRUNCH,
  CHANGE_FILTER,
  NEWS_ARTICLE_ERROR,
  SHOW_ARTICLE,
} from '../actions/newsActions';

const initialState = {
  techNews: [],
  customNews: [],
  error: null,
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOM_NEWS:
      return {
        ...state,
        customNews: action.payload,
        error: action.payload.error,
      };

    case FETCH_TECH_CRUNCH:
      return {
        ...state,
        techNews: action.payload,
      };

    case NEWS_ARTICLE_ERROR:
      return {
        ...state,
        error: action.payload.error,
        customNews: [],
      };

    case SHOW_ARTICLE:
      return {
        ...state,
        customNews: action.articles,
        article: action.article,
        pattern: null,
      };

    case CHANGE_FILTER:
      return {
        ...state,
        pattern: action.filter.toLowerCase(),
      };

    default:
      return state;
  }
};

export default articleReducer;
