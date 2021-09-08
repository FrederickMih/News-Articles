import { combineReducers } from 'redux';
import newsFilterReducer from './filterReducer';
import articleReducer from './articleReducers';

export const reducers = combineReducers({
  newsArts: articleReducer, filter: newsFilterReducer,
});

export default reducers;
