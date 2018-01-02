import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import {combineReducers} from 'redux';
import firebase from './firebase/reducer';
import users from './users/reducer'
import orders from './orders/reducer'

import {initFirebase} from "./firebase/actions";

const combinedReducers = combineReducers({
    users,
    orders,
    firebase,
});

const store = createStore(
    combinedReducers,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
        )
    )
);

store.dispatch(initFirebase());

export default store;
