/* eslint-disable no-case-declarations */
import {
    GET_USERS_LIST,
    GET_SINGLE_USER,
    POST_REGISTER,

} from "../actions/types";

//INITIAL_STATE
const INITIAL_STATE = {
    data: {},
    userData: {},
    token: ''
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
            
        case GET_SINGLE_USER:
            return {
                ...state,
                userData: action.payload
            };


        default:
            return state;
    }
};
