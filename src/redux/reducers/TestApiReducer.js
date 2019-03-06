/* eslint-disable no-case-declarations */
import {
    GET_USERS_LIST,
    GET_SINGLE_USER,
    POST_REGISTER,

    API_START,
    API_END,
    API_ERROR
} from "../actions/types";

//INITIAL_STATE
const INITIAL_STATE = {
    data: {},
    token: '',
    isLoadingData: false
};
//reducer
export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case GET_USERS_LIST:
            const newStateUsers = {
                ...state,
                data: action.payload
            };
            return newStateUsers;

        case POST_REGISTER:
            return {
                ...state,
                token: action.payload.token
            };

        case API_START:
            if (action.payload === GET_USERS_LIST
                || action.payload === POST_REGISTER) {
                return {
                    ...state,
                    isLoadingData: true
                };
            }
        case API_END:
            if (action.payload === GET_USERS_LIST
                || action.payload === POST_REGISTER) {
                return {
                    ...state,
                    isLoadingData: false
                };
            }

        default:
            return state;
    }
};
