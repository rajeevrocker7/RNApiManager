import {
    API,
    GET_USERS_LIST,
    GET_SINGLE_USER,
    POST_REGISTER
} from './types';

import { API_CONST } from '../../constants/ApiConstants';

//ACTION CREATORS
export const getUsersSuccessAction = (data) => {
    return {
        type: GET_USERS_LIST,
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
 */
//GET REQUEST
export const fetchUsersList = () => {
    const url_ = `${API_CONST.BASE_URL_TEST}${API_CONST.GET_USERS_LIST}`;
    //returns a funtion, not an action object
    return apiAction({
        url: url_,
        onSuccess: getUsersSuccessAction,
        onFailure: () => { console.log("Error occured at: fetchUsersList") },
        label: GET_USERS_LIST
    });
};
//POST REQUEST
export const postRegisterUser = () => {
    const url_ = `${API_CONST.BASE_URL_TEST}${API_CONST.POST_REGISTER}`;
    //returns a funtion, not an action object
    return apiAction({
        url: url_,
        method: "POST",
        data: {
            "email": "rajeev@algoworks.com",
            "password": "pistol_101"
        },
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
