import {
  FETCH_CUSTOM_NEWS,
  CHANGE_FILTER,
  NEWS_ARTICLE_ERROR,
  SHOW_ARTICLE,
} from '../actions/newsActions';

const initialState = {
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
