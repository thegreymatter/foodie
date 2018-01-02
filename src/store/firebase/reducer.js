// import * as actionTypes from './action-types';
import _ from 'lodash';
import Immutable from 'seamless-immutable';
// import {getOrders} from "../orders/selectors";
import {getUsers} from "../users/reducer";

const initialState = Immutable({
    loggedIn: undefined,
    userId: undefined,
    displayName: "",
    photoURL: "",
});

export default function (state = initialState, action = {}) {
    switch (action.type) {
        // case actionTypes.LOGGED_IN:
        //     return Immutable.merge(state,{
        //         loggedIn: true,
        //         userId: action.userId,
        //         displayName: action.displayName,
        //         photoURL: action.photoURL,
        //     });
        //
        // case actionTypes.LOGGED_OUT:
        //     return Immutable.merge(state,{
        //         loggedIn: false,
        //         userId: undefined,
        //         displayName: "",
        //         photoURL: "",
        //     });

        default:
            return state;
    }
}

export function isLoggedIn(state) {
    return state.firebase.loggedIn;
}

export function isFetching(state){
    const fetchingUsers = _.isEmpty(getUsers(state));

    return fetchingUsers ;
}