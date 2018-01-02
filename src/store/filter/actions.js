import * as actionTypes from './action-types';

export function updateFilter(newFilter) {
    return {
        type: actionTypes.UPDATE_FILTER,
        payload: newFilter,
    };
}

