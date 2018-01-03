import * as actionTypes from './action-types';

export default (state = "", action = {}) => {
    switch (action.type) {
        case actionTypes.UPDATE_FILTER:
            return action.payload;

        default:
            return state
    }
}

// Selectors:
export function getFilter(state) {
    return state.filter;
}
