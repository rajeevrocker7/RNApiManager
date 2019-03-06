import { combineReducers } from 'redux';
import TestApiReducer from './TestApiReducer';

export default combineReducers(
    {
        test_api_reducer: TestApiReducer
    }
);
