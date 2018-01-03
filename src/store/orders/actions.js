import * as actionTypes from './action-types';
import {sendDataToDatabase} from "../firebase/actions";
import {getWaitingOrdersByUserId} from "./reducer";
import _ from 'lodash';

export function receiveOrders(orders) {
    for (const key in orders) {
        if (orders.hasOwnProperty(key)) {
            orders[key].key = key;
        }
    }


    return {
        type: actionTypes.RECEIVE_ORDERS,
        payload: orders,
    };
}


export function markOrdersAsNotified(user) {
    return async function markOrdersAsNotified(dispatch, getState) {
        // const minute = 60 * 1000;
        const expiration = new Date();
        expiration.setTime(expiration.getTime() + 5 * 1000); // TODO change expiration time
        const userOrders = getWaitingOrdersByUserId(getState(), user.id);
        _.map(userOrders, order => {
                if (!order.notified) {
                    sendDataToDatabase("/orders/" + order.key + "/notified", true);
                    sendDataToDatabase("/orders/" + order.key + "/expiration", expiration.toJSON());
                    sendDataToDatabase("/orders/" + order.key + "/arrived", new Date().toJSON());
                }

            }
        );
    }
}
