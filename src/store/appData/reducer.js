import * as actionTypes from './action-types';

const initialState = {
    filter: "",
    floor: undefined,
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.UPDATE_FILTER:
            return Object.assign({}, state, {
                filter: action.payload
            });

        case actionTypes.UPDATE_FLOOR:
            return Object.assign({}, state, {
                floor: action.payload
            });

        default:
            return state
    }
}

// Selectors:
export function getFilter(state) {
    return state.appData.filter;
}

export function getFloor(state){
    return state.appData.floor;
}
