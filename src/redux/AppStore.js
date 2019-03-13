//redux, thunk, custom middleware, react-redux
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ApiMiddleware from "../apiManager/ApiMiddleware";
import rootReducer from './reducers';

//createStore
const AppStore = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk, ApiMiddleware));

export default AppStore;