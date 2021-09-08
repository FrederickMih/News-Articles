export const FETCH_CUSTOM_NEWS = 'FETCH_CUSTOM_NEWS';
export const SEARCH_ARTICLE = 'SEARCH_ARTICLE';
export const FILTER_NEWS = 'FILTER_NEWS';
export const LOADING_ARTICLE = 'LOADING_ARTICLE';
export const FETCH_TECH_CRUNCH = 'FETCH_TECH_CRUNCH';
export const FETCH_TECH_NEWS = 'FETCH_TECH_NEWS';

const apiKey = '08dd40237d8148d9ade088ed2744791c';

export const fetchCustomNews = (source, mostImportant) => (dispatch) => {
  fetch(`https://newsapi.org/v2/everything?sources=${source}&sortBy=${mostImportant}&apiKey=${apiKey}`)
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);
      dispatch({
        type: FETCH_CUSTOM_NEWS,
        payload: response.articles,
      });
    })
    .catch((err) => (err));
};

export const fetchTechCrunch = (id) => (dispatch) => {
  fetch(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${apiKey}&i=${id}`)
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: FETCH_TECH_CRUNCH,
        payload: res.articles,
      });
    })
    .catch((err) => (err));
};

export const searchArticle = (source) => (dispatch) => {
  dispatch({
    type: SEARCH_ARTICLE,
    payload: source,
  });
};

export const filterNews = (filter) => ({
  type: FILTER_NEWS,
  payload: filter,
});

export const loadingArticle = () => ({
  type: LOADING_ARTICLE,
});
