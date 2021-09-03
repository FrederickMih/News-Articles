export const FETCH_CUSTOM_NEWS = 'FETCH_CUSTOM_NEWS';
export const fetchCustomNews = (source, mostImportant) => (dispatch) => {
  const apiKey = '08dd40237d8148d9ade088ed2744791c';
  fetch(`https://newsapi.org/v2/everything?sources=${source}&sortBy=${mostImportant}&apiKey=${apiKey}`)
    .then((response) => response.json())
    .then((response) => {
      // console.log(res)
      dispatch({
        type: FETCH_CUSTOM_NEWS,
        payload: response.articles,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
