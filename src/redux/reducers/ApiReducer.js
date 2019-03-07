/* eslint-disable no-case-declarations */
import {
    API_START,
    API_END,
    API_ERROR,

    GET_USERS_LIST,
    GET_SINGLE_USER,
    POST_REGISTER,
} from "../actions/types";

//INITIAL_STATE
const INITIAL_STATE = {
    error: 'ERR-Something went wrong!',
    isLoadingData: false
};

//reducer
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case API_START:
            if (action.payload === GET_USERS_LIST
                || action.payload === GET_SINGLE_USER
                || action.payload === POST_REGISTER) {
                return {
                    ...state,
                    isLoadingData: true
                };
            }

        case API_END:
            if (action.payload === GET_USERS_LIST
                || action.payload === GET_SINGLE_USER
                || action.payload === POST_REGISTER) {
                return {
                    ...state,
                    isLoadingData: false
                };
            }

        case API_ERROR:
            if (action.payload === GET_USERS_LIST
                || action.payload === GET_SINGLE_USER
                || action.payload === POST_REGISTER) {
                return {
                    ...state,
                    isLoadingData: false,
                    error: 'ERR-Something went wrong!'
                };
            }

        default:
            return state;
    }
};
