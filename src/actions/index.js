export const NEWS_ARTICLE_ONE = 'NEWS_ARTICLE_ONE';
export const NEWS_ARTICLE_TWO = 'NEWS_ARTICLE_TWO';
export const PRESENT_ARTICLE = 'PRESENT_ARTICLE';
export const NEWS_ARTICLE_ERROR = 'NEWS_ARTICLE_ERROR';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const newsArtcleOne = () => ({
  type: NEWS_ARTICLE_ONE,
});

export const newsArtcleTwo = (articles) => ({
  type: NEWS_ARTICLE_TWO,
  payload: articles,
});

export const presentArticle = (article) => ({
  type: PRESENT_ARTICLE,
  payload: article,
});

export const newsArticleError = (error) => ({
  type: NEWS_ARTICLE_ERROR,
  payload: { error },
});

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});
