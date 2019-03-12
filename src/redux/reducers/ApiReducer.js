/* eslint-disable no-case-declarations */
import {
    API_START,
    API_END,
    API_ERROR,

    GET_USERS_LIST,
    GET_SINGLE_USER,
    POST_REGISTER,
} from "../actions/types";

//models
import {
    createApiModel
} from '../../models/ModelUtils';


//INITIAL_STATE
const INITIAL_STATE = {
    apiModel: createApiModel(),
};

//reducer
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case API_START:
            console.log(action.type, action.payload);
            if (action.payload === GET_USERS_LIST
                || action.payload === GET_SINGLE_USER
                || action.payload === POST_REGISTER) {
                return {
                    ...state,
                    apiModel: createApiModel({ API_IS_LOADING: true }),
                };
            }

        case API_END:
            console.log(action.type, action.payload);
            if (action.payload === GET_USERS_LIST
                || action.payload === GET_SINGLE_USER
                || action.payload === POST_REGISTER) {
                return {
                    ...state,
                    apiModel: createApiModel({ API_IS_LOADING: false }),
                };
            }

        case API_ERROR:
            console.log(action.type, action.payload);
            if (action.payload === GET_USERS_LIST
                || action.payload === GET_SINGLE_USER
                || action.payload === POST_REGISTER) {
                return {
                    ...state,
                    apiModel: createApiModel({
                        API_IS_LOADING: false,
                        API_ERR: 'Error/-Something went wrong!'
                    }),

                };
            }

        default:
            return state;
    }
};
