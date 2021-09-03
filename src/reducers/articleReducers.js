import {
  NEWS_ARTICLE_HEADER,
  FETCH_SEARCH_NEWS,
  PRESENT_ARTICLE,
  CHANGE_FILTER,
  NEWS_ARTICLE_ERROR,
} from '../actions/index';

const initialState = {
  news: [],
  error: null,
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_ARTICLE_HEADER:
      return {
        ...state,
        error: null,
      };

    case CUSTOM_NEWS_ARTICLE:
      return {
        ...state,
        news: action.payload,
        error: action.payload.error,
      };

    case NEWS_ARTICLE_ERROR:
      return {
        ...state,
        error: action.payload.error,
        news: [],
      };

    case PRESENT_ARTICLE:
      return {
        news: action.artcles,
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
