import { FILTER_NEWS } from '../actions/newsActions';

export const initialState = {
  filter: 'All',
};

const newsFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_NEWS: {
      const filter = action.payload;
      return {
        ...state, filter,
      };
    }
    default:
      return state;
  }
};
export default newsFilterReducer;
