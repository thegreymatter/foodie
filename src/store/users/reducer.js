import * as actionTypes from './action-types';
import _ from 'lodash';
import {getWaitingOrders} from "../orders/reducer";
import {filterUsers, getFilter} from "../filter/reducer";

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

    let result;

    const filter = getFilter(state);
    if (filter === "") { //No filter
        result = _.filter(users, user => _.some(waitingOrders, order => order.userId === user.id));
    } else {
        result = filterUsers(state, users);
    }

    return _.sortBy(result, user => user.name);

}