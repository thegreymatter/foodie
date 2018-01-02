import * as actionTypes from './action-types';

export function receiveEmployees(employees) {
    return {
        type: actionTypes.RECEIVE_EMPLOYEES,
        payload: employees,
    };
}

