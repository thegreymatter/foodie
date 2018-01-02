import * as actionTypes from './action-types';
import _ from 'lodash';

export default (state = {}, action = {}) => {
    switch (action.type) {
        case actionTypes.RECEIVE_ORDERS:
            return action.payload;

        //case LOGGED_OUT:
         //   return {};

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
    return !order.notified && new Date(order.expiration) > now;
}
//
// export function getNextOrganizationId(state) {
//     const organizations = getOrganizations(state);
//     const keys = _.keys(organizations);
//     if (!organizations || keys.length === 0)
//         return null;
//     return _.max(_.map(_.keys(organizations), _.parseInt)) + 1;
// }
//
// export function getOrganizationById(state, id) {
//     return getOrganizations(state)[id];
// }