import * as actionTypes from './action-types';

export default (state = {}, action = {}) => {
    switch (action.type) {
        case actionTypes.RECEIVE_USERS:
            return action.payload;

        //case LOGGED_OUT:
         //   return {};

        default:
            return state
    }
}

// Selectors:
export function getUsers(state) {
    return state.users;
}
//
// export function getNextOrganizationId(state) {
//     const organizations = getOrganizations(state);
//     const keys = _.keys(organizations);
//     if (!organizations || keys.length === 0)
//         return null;
//     return _.max(_.map(_.keys(organizations), _.parseInt)) + 1;
// }
//
// export function getOrganizationById(state, id) {
//     return getOrganizations(state)[id];
// }