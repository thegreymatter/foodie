import * as actionTypes from './action-types';

export default (state = {}, action = {}) => {
    switch (action.type) {
        case actionTypes.RECEIVE_USERS:
            return action.payload;

        default:
            return state
    }
}

// Selectors:
export function getUsers(state) {
    return state.users;
}
