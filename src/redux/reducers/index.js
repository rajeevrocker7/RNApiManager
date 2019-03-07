import { combineReducers } from 'redux';
import TestApiReducer from './TestApiReducer';
import ApiReducer from './ApiReducer';

export default combineReducers(
    {
        test_api_reducer: TestApiReducer,
        api_reducer: ApiReducer,
    }
);
