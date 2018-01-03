import * as actionTypes from './action-types';

export function updateFilter(newFilter) {
    return {
        type: actionTypes.UPDATE_FILTER,
        payload: newFilter,
    };
}

export function updateFloor(newFloor) {
    return {
        type: actionTypes.UPDATE_FLOOR,
        payload: newFloor,
    };
}

