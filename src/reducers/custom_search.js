const customSearch = (state = {
  customNews: [],
}, action) => {
  if (action.type === 'FETCH_CUSTOM_NEWS') {
    // eslint-disable-next-line no-param-reassign
    state = { ...state, customNews: action.payload };
  }

  return state;
};
export default customSearch;
