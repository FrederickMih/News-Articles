export const FETCH_CUSTOM_NEWS = 'FETCH_CUSTOM_NEWS';
export const SHOW_ARTICLE = 'SHOW_ARTICLE';
export const NEWS_ARTICLE_ERROR = 'NEWS_ARTICLE_ERROR';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const newsArticleError = (error) => ({
  type: NEWS_ARTICLE_ERROR,
  payload: { error },
});

export const fetchCustomNews = (source, mostImportant) => (dispatch) => {
  const handleErrors = (response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };
  const apiKey = '08dd40237d8148d9ade088ed2744791c';
  fetch(`https://newsapi.org/v2/everything?sources=${source}&sortBy=${mostImportant}&apiKey=${apiKey}`)
    .then(handleErrors)
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);
      dispatch({
        type: FETCH_CUSTOM_NEWS,
        payload: response.articles,
      });
    })
    .catch((err) => {
      dispatch(newsArticleError(err));
      console.log(err);
    });
};

export const fetchTechCrunch = () => (dispatch) => {
  const apiKey = '08dd40237d8148d9ade088ed2744791c';
  fetch(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${apiKey}`)
    .then((res) => res.json())
    .then((res) => {
      // console.log(res)
      dispatch({
        type: 'FETCH_TECH_CRUNCH',
        payload: res.articles,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const showArticle = (articles) => ({
  type: SHOW_ARTICLE,
  articles,
});

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});
