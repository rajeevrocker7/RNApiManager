/* eslint-disable no-case-declarations */
import {
    TEST_API
} from "../actions/types";

//INITIAL_STATE
const INITIAL_STATE = {
    response: {}
};
//reducer
export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case TEST_API:
            const newState = {
                ...state,
                response: action.payload
            };
            return newState;

        default:
            return state;
    }
};
