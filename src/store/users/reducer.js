import * as actionTypes from './action-types';
import _ from 'lodash';
import {getWaitingOrders} from "../orders/reducer";
import {filterUsers} from "../filter/reducer";

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

export function getWaitingUsers(state) {
    const users = getUsers(state);
    const waitingOrders = getWaitingOrders(state);

    const waitingUsers = _.filter(users, user => _.some(waitingOrders, order => order.userId === user.id));

    return filterUsers(state, waitingUsers);

}