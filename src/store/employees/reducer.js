import * as actionTypes from './action-types';

export default (state = {}, action = {}) => {
    switch (action.type) {
        case actionTypes.RECEIVE_EMPLOYEES:
            return action.payload;

        default:
            return state
    }
}

// Selectors:
export function getEmployees(state) {
    return state.employees;
}
