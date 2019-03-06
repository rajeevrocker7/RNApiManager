/* eslint-disable no-case-declarations */
import {
    EMAIL_CHANGED,
    PASS_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_LOADING
} from "../actions/types";

//INITIAL_STATE
const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    successMsg: '',
    isLoading: false
};
//reducer
export default (state = INITIAL_STATE, action) => {
    // console.log("AUTH_REDUCER: "+action.type);

    switch (action.type) {
        case EMAIL_CHANGED:
            const newState = {
                ...state,
                email: action.payload
            };
            return newState;

        case PASS_CHANGED:
            const newStatePass = {
                ...state,
                password: action.payload
            };
            return newStatePass;

        case LOGIN_USER_LOADING:
            const newStateLoad = {
                ...state,
                isLoading: true,
                error: '',
                successMsg: ''
            };
            return newStateLoad;

        case LOGIN_USER_SUCCESS:
            const newStateSuccess = {
                ...state,
                ...INITIAL_STATE,
                user: action.payload,
                successMsg: 'You are Logged In Successfully.'
            };
            return newStateSuccess;

        case LOGIN_USER_FAIL:
            const newStateFail = {
                ...state,
                error: 'Authentication Failed!',
                password: '',
                isLoading: false,
                successMsg: ''
            };
            return newStateFail;

        default:
            return state;
    }
};
