import * as actionTypes from './action-types';

export function receiveUsers(users) {
    return {
        type: actionTypes.RECEIVE_USERS,
        payload: users,
    };
}

