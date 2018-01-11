import * as actionTypes from './action-types';
import _ from 'lodash';
import {getEmployees} from "../employees/reducer";
import {getUsers} from "./reducer";
import {sendDataToDatabase} from "../firebase/actions";

export function receiveUsers(users) {
    return {
        type: actionTypes.RECEIVE_USERS,
        payload: users,
    };
}


export function validateUsers() {
    return async function validateUsers(dispatch, getState) {
        try {

            const employees = getEmployees(getState());
            if (_.isEmpty(employees))
                return;

            const users = getUsers(getState());

            _.map(users, user => {
                if (!user.name) {
                    let employee = employees[user.phone];
                    if (user.phone.indexOf('+') !== -1) {
                        employee = employees[user.phone.substr(1)];
                    }
                    if (!employee) {
                        console.error("No such employee with phone " + user.phone);
                        return;
                    }

                    user.name = employee.name;
                    user.searsId = employee.searsId;

                    dispatch(sendDataToDatabase("/users/" + user.id, user));
                }
            });
        } catch (err) {
        }
    }
}