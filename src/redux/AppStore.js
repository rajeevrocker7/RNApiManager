//redux, thunk, custom middleware, react-redux
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ApiMiddleware from "../ApiManager/ApiMiddleware";
import rootReducer from './reducers';

//createStore
const AppStore = createStore(
    rootReducer,
    {},
    applyMiddleware(ReduxThunk, ApiMiddleware));

export default AppStore;