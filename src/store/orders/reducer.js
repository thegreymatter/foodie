import * as actionTypes from './action-types';
import _ from 'lodash';

export default (state = {}, action = {}) => {
    switch (action.type) {
        case actionTypes.RECEIVE_ORDERS:
            return action.payload;
        default:
            return state
    }
}

// Selectors:
export function getOrders(state) {
    return state.orders;
}

export function getWaitingOrders(state) {
    const orders = getOrders(state);
    const now = new Date();
    return _.filter(orders, order => isWaitingOrder(order, now));
}

function isWaitingOrder(order, now){
    return new Date(order.expiration) > now;
}

export function getWaitingOrdersByUserId(state, userId) {
    const waitingOrders = getWaitingOrders(state);
    return  _.filter(waitingOrders, order => order.userId === userId);
}
