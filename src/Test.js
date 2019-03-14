//plain action creator:
function userLoggedIn() {
    return {
        type: 'USER_LOGGED_IN',
        username: 'dave'
    };
}

//wrapper
function getUser() {
    return function () {
        return axios.get('/current_user');
    };
}

//action creator via redux-thunk
function logOutUser() {
    return function (dispatch, getState) {
        return axios.post('/logout').then(function () {
            // pretend we declared an action creator called 'userLoggedOut',
            // and now we can dispatch it
            dispatch(userLoggedOut());
        });
    };
}

/////--------- plain custom redux-thunk middleware -----------/////
function createThunkMiddleware(extraArgument) {
    return ({ dispatch, getState }) => next => action => {
        // This gets called for every action you dispatch.
        // If it's a function, call it.
        if (typeof action === 'function') {
            return action(dispatch, getState, extraArgument);
        }

        // Otherwise, 
        //just continue processing this action as usual
        return next(action);
    };
}
const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
export default thunk;

