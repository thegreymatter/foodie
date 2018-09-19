import * as actionTypes from './action-types';

const initialState = {
    loggedIn: undefined,
    userId: undefined,
    displayName: "",
    photoURL: "",
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case actionTypes.LOGGED_IN:
            return {
                loggedIn: true,
            };

        case actionTypes.LOGGED_OUT:
            return {
                loggedIn: false,
            };

        default:
            return state;
    }
}

export function isLoggedIn(state) {
    return state.firebase.loggedIn;
}
