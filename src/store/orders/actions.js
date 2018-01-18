import * as actionTypes from './action-types';
import {pushDataToDatabase, sendDataToDatabase} from "../firebase/actions";
import {getWaitingOrdersByUserId} from "./reducer";
import _ from 'lodash';
import {getUsers} from "../users/reducer";

export function receiveOrders(orders) {
    return async function receiveOrdersAndUpdateChatId(dispatch) {
        for (const key in orders) {
            if (orders.hasOwnProperty(key)) { //Iterate over all orders
                orders[key].key = key;
            }
        }


        await dispatch({
            type: actionTypes.RECEIVE_ORDERS,
            payload: orders,
        });

        dispatch(fixOrderId(orders));
    }
}

function fixOrderId(orders) {
    return async function receiveOrdersAndUpdateChatId(dispatch, getState) {

        for (const key in orders) {
            if (orders.hasOwnProperty(key)) { //Iterate over all orders

                if (!orders[key].hasOwnProperty("userId")) {
                    const users = getUsers(getState());
                    if (users === {}) {
                        console.error("no users")
                    } else {
                        for (const userKey in users) {
                            if (users[userKey].searsId.toLowerCase() === orders[key].searsId.toLowerCase()) {
                                orders[key].userId = userKey;
                                sendDataToDatabase('orders/' + key + "/userId", parseInt(userKey));
                            }
                        }
                    }
                }
            }
        }
    }
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
