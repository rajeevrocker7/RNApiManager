/* eslint-disable no-case-declarations */
import {
    GET_USERS_LIST,
    GET_SINGLE_USER,
    POST_REGISTER,

} from "../actions/types";

//INITIAL_STATE
const INITIAL_STATE = {
    userList_Res: {},
    userInfo_Res: {},
    userRegister_Res: {},
};

//reducer
export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case GET_USERS_LIST:
            const newStateUsers = {
                ...state,
                userList_Res: (action.payload),
            };
            return newStateUsers;

        case GET_SINGLE_USER:
            return {
                ...state,
                userInfo_Res: (action.payload),
            };

        case POST_REGISTER:
            return {
                ...state,
                userRegister_Res: (action.payload),
            };


        default:
            return state;
    }
};
