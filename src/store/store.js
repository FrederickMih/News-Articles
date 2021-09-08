import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import Reducers from '../reducers/reducers';

const middleware = applyMiddleware(thunk);
const initialState = {};

// --- STORE
const store = createStore(Reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
