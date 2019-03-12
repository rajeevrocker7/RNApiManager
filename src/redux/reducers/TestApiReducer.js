/* eslint-disable no-case-declarations */
import {
    GET_USERS_LIST,
    GET_SINGLE_USER,
    POST_REGISTER,

} from "../actions/types";

//models
import {
    createUserListModel,
    createUserModel,
    createUserRegisterModel
} from '../../models/ModelUtils';

//INITIAL_STATE
const INITIAL_STATE = {
    userListModel: createUserListModel(),
    userModel: createUserModel(),
    userRegisterModel: createUserRegisterModel(),
};

//reducer
export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case GET_USERS_LIST:
            const newStateUsers = {
                ...state,
                userListModel: createUserListModel(action.payload),
            };
            return newStateUsers;

        case GET_SINGLE_USER:
            return {
                ...state,
                userModel: createUserModel(action.payload),
            };

        case POST_REGISTER:
            return {
                ...state,
                userRegisterModel: createUserRegisterModel(action.payload),
            };


        default:
            return state;
    }
};
