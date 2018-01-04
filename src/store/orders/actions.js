import * as actionTypes from './action-types';
import {pushDataToDatabase, sendDataToDatabase} from "../firebase/actions";
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
        const minute = 60 * 1000;
        const expiration = new Date();
        expiration.setTime(expiration.getTime() + 5 * minute);
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

export function createNewOrder(user) {
    const newOrder = {
        userId: user.id,
        orderTime: new Date().toJSON(),
        notified: false,
        expiration: getExpiration().toJSON(),
        name: user.name,
    };

    pushDataToDatabase('/orders', newOrder);

}


function getExpiration() {
    const expirationInHours = 3;
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + expirationInHours * 60 * 60 * 1000);

    return expirationDate;
}
