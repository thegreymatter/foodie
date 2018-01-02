import * as actionTypes from './action-types';
import _ from 'lodash'

export default (state = "", action = {}) => {
    switch (action.type) {
        case actionTypes.UPDATE_FILTER:
            return action.payload;

        default:
            return state
    }
}

// Selectors:
function getFilter(state) {
    return state.filter;
}

export function filterUsers(state, users){
    const filter = getFilter(state);
    if(filter === "")
        return users;

    return _.filter(users, user => user.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
}

