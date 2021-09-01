import { newsArticleHeader, customNewsArticle, newsArticleError } from '../actions';

const retrieveNewsArticle = (mostImportance, source) => (dispatch) => {
  const apiKey = '08dd40237d8148d9ade088ed2744791c';
  dispatch(newsArticleHeader());
  return fetch(`https://newsapi.org/v2/everything?sources=${source}&sortBy=${mostImportance}"&apiKey=${apiKey}`)

    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res;
    })

    .then((res) => res.json())

    .then((json) => {
      dispatch(customNewsArticle(json));
      return json;
    })

    .catch((error) => dispatch(newsArticleError(error)));
};

export default retrieveNewsArticle;
