import { combineReducers } from 'redux';
import customSearch from './custom_search';

// combine reducers
// remember you need to export the reducers to use them
const reducers = combineReducers({
  CustomSearch: customSearch,
});

export default reducers;
