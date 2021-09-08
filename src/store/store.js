import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import Reducers from '../reducers/reducers';

const middleware = applyMiddleware(thunk);
const initialState = {};

// --- STORE
const store = createStore(Reducers, initialState, middleware);

export default store;
