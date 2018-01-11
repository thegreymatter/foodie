import {receiveUsers} from '../users/actions'
import * as firebase from 'firebase';
import {receiveOrders} from "../orders/actions";
import {receiveEmployees} from "../employees/actions";

const firebaseConfig = {
    apiKey: "AIzaSyAgz4f_lRZGVgE43U3oMc4KQFaYXkXJdyQ",
    authDomain: "syw-foodie.firebaseapp.com",
    databaseURL: "https://syw-foodie.firebaseio.com",
    projectId: "syw-foodie",
    storageBucket: "syw-foodie.appspot.com",
    messagingSenderId: "504115679989"
};

export function initFirebase() {
    return async function signInRequest(dispatch) {

       await firebase.initializeApp(firebaseConfig);
        await dispatch(fetchData('employees', receiveEmployees));
        await dispatch(fetchData('users', receiveUsers));
        await dispatch(fetchData('orders', receiveOrders));
    }
}

export function fetchData(collectionName, actionCallback) {
    return function afterSignedIn(dispatch) {
        firebase.database().ref(collectionName).on('value', snapshot => {
                dispatch(actionCallback(snapshot.val()));
            },
            error => {
                console.error("The request for " + collectionName + " failed: " + error.code);
            });
    }
}

export function sendDataToDatabase(collectionPath, value) {
    return firebase.database().ref(collectionPath).set(value);
}


export function pushDataToDatabase(collectionPath, value) {
    return firebase.database().ref(collectionPath).push(value);
}
