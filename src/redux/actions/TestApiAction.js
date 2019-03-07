import {
    API,
    GET_USERS_LIST,
    GET_SINGLE_USER,
    POST_REGISTER
} from './types';

import { API_CONST } from '../../constants/ApiConstants';

//ACTION CREATORS: synchronous
export const getUsersSuccessAction = (data) => {
    return {
        type: GET_USERS_LIST,
        payload: data
    };
};

export const getSingleUserAction = (data) => {
    return {
        type: GET_SINGLE_USER,
        payload: data
    };
};

export const registerUserSuccessAction = (data) => {
    return {
        type: POST_REGISTER,
        payload: data
    };
};


/**
 * HELPERS:ACTION CREATORS FOR API CALLS via Redux-Thunk
 * ACTION CREATORS: a-synchronous
 */
//GET REQUEST
export const fetchUsersList = () => {
    const url_ = `${API_CONST.BASE_URL_TEST}${API_CONST.GET_USERS_LIST}`;
    //returns a funtion, not an action object
    return apiAction({
        url: url_,
        method: "GET",
        onSuccess: getUsersSuccessAction,
        onFailure: () => { console.log("Error occured at: fetchUsersList") },
        label: GET_USERS_LIST
    });
};

//GET REQUEST
export const fetchSingleUser = (id) => {
    const url_ = `${API_CONST.BASE_URL_TEST}${API_CONST.GET_SINGLE_USER}${id}`;
    //returns a funtion, not an action object
    return apiAction({
        url: url_,
        method: "GET",
        onSuccess: getSingleUserAction,
        onFailure: () => { console.log("Error occured at: fetchSingleUser") },
        label: GET_SINGLE_USER
    });
};

//POST REQUEST
export const postRegisterUser = (data_obj) => {
    const url_ = `${API_CONST.BASE_URL_TEST}${API_CONST.POST_REGISTER}`;
    //returns a funtion, not an action object
    return apiAction({
        url: url_,
        method: "POST",
        data: data_obj,
        onSuccess: registerUserSuccessAction,
        onFailure: () => { console.log("Error occured at: postRegisterUser") },
        label: POST_REGISTER
    });
};


// METHOD: TO RETURN ACTION FOR API_MIDDLEWARE FOR API CALLS
export const apiAction = ({
    url = "",
    method = "GET",
    data = null,
    accessToken = null,
    onSuccess = () => { },
    onFailure = () => { },
    label = "",
    headersOverride = null
}) => {
    //return action object of type='API'
    return {
        type: API,
        payload: {
            url,
            method,
            data,
            accessToken,
            onSuccess,
            onFailure,
            label,
            headersOverride
        }
    };
};
