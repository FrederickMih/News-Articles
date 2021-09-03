export const NEWS_ARTICLE_HEADER = 'NEWS_ARTICLE_HEADER';
export const CUSTOM_NEWS_ARTICLE = 'CUSTOM_NEWS_ARTICLE';
export const PRESENT_ARTICLE = 'PRESENT_ARTICLE';
export const NEWS_ARTICLE_ERROR = 'NEWS_ARTICLE_ERROR';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const newsArticleHeader = () => ({
  type: NEWS_ARTICLE_HEADER,
});

export const customNewsArticle = (articles) => ({
  type: CUSTOM_NEWS_ARTICLE,
  payload: articles,
});

export const presentArticle = (article) => ({
  type: PRESENT_ARTICLE,
  article,
});

export const newsArticleError = (error) => ({
  type: NEWS_ARTICLE_ERROR,
  payload: { error },
});

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});
