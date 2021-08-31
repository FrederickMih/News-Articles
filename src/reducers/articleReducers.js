import {
  NEWS_ARTICLE_ONE,
  NEWS_ARTICLE_TWO,
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
    case NEWS_ARTICLE_ONE:
      return {
        ...state,
        error: null,
      };

    case NEWS_ARTICLE_TWO:
      return {
        ...state,
        news: action.artcles,
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
