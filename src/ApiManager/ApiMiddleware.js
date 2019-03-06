import axios from "axios";
import { API } from "../redux/actions/types";
import { apiError, apiStart, apiEnd } from "../redux/actions/APIAction";
import { API_CONST } from '../constants/ApiConstants';

//1. Set up the middleware
const ApiMiddleware = ({ dispatch }) => next => action => {
    next(action);

    //2. ONLY DO FOR type='API' actions, Dismiss irrelevant action types
    if (action.type !== API)
        return;
    //3. Extract important variables from the action payload
    const {
        url,
        method,
        data,
        accessToken,
        onSuccess,
        onFailure,
        label,
        headers
    } = action.payload;

    console.log(`ApiMiddleware: ->\n ${method}  ${url}`);
    if (data)
        console.log(`ApiMiddleware: ->\n ${JSON.stringify(data)}`);

    //4.Handle any HTTP method
    const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";
    

    //5. Handle Globals/axios default configs
    axios.defaults.baseURL = API_CONST.BASE_URL_TEST || "";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Authorization"] = `Bearer${accessToken}`;

    //6.Handle loading states
    if (label) {
        dispatch(apiStart(label));  // send apiStart action
    }

    //7. Make the actual network request, handle errors, and invoke callbacks
    axios
        .request({
            url,
            method,
            headers,
            [dataOrParams]: data
        })
        .then(({ data }) => {
            console.log(`ApiMiddleware: -> onSuccess: ->\n `);
            console.log(data);

            dispatch(onSuccess(data));  //-> SUCCESS callback
        })
        .catch(error => {
            console.log(`ApiMiddleware: -> onFailure / error: ->\n `);
            console.log(error);

            dispatch(apiError(error));  // send apiError action 

            dispatch(onFailure(error)); //-> FAILURE callback
        })
        .finally(() => {
            if (label) {
                console.log(`ApiMiddleware: -> finally: ->\n `);
                console.log(label);

                dispatch(apiEnd(label)); // send apiEnd action 
            }
        });
};
export default ApiMiddleware;