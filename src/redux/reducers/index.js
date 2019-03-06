import { combineReducers } from 'redux';
import LoginAuthReducer from './LoginAuthReducer';
import TestApiReducer from './TestApiReducer';

export default combineReducers(
    {
        auth_reducer: LoginAuthReducer,
        test_api_reducer: TestApiReducer
    }
);
