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
        dispatch(fetchData('orders', receiveOrders));
        await dispatch(fetchData('users', receiveUsers));
        await dispatch(fetchData('employees', receiveEmployees));

        // firebase.auth().onAuthStateChanged(function (user) {
        //     if (user) {
        //         dispatch(afterSignedIn(user));
        //     } else {
        //         dispatch({type: actionTypes.LOGGED_OUT});
        //     }
        // });
        //
        // return promise;
    }
}

// export function signInWithGoogle(errorCallback) {
//     return function signInRequest(dispatch) {
//         const provider = new firebase.auth.GoogleAuthProvider();
//         firebase.auth().signInWithRedirect(provider).then(function (result) {
//             dispatch(afterSignedIn(result.user));
//         }).catch(function (error) {
//             errorCallback(error.message);
//             console.error(error);
//         });
//     }
// }
//
// export function signInRequest(email, password, errorCallback) {
//     return function signInRequest(dispatch, getState) {
//         return firebase.auth().signInWithEmailAndPassword(email, password)
//             .then(signInSuccess, signInFailure);
//
//         function signInSuccess(user) {
//             dispatch(afterSignedIn(user));
//         }
//
//         function signInFailure(error) {
//             switch (error.code) {
//                 case 'auth/invalid-email':
//                     errorCallback(getLabels(getState()).pages.loginPage.errors.invalidEmail);
//                     return;
//
//                 case 'auth/wrong-password':
//                     errorCallback(getLabels(getState()).pages.loginPage.errors.wrongPassword);
//                     return;
//
//                 case 'auth/user-disabled':
//                     errorCallback(getLabels(getState()).pages.loginPage.errors.userDisabled);
//                     return;
//
//                 case 'auth/user-not-found':
//                     errorCallback(getLabels(getState()).pages.loginPage.errors.userNotFound);
//                     return;
//
//                 default:
//                     errorCallback(error.message);
//                     return;
//             }
//         }
//     }
// }
//
// export function afterSignedIn(user) {
//     return function afterSignedIn(dispatch) {
//         dispatch(fetchData('users', receiveUsers));
//     }
// }
//
// export function signOutRequest() {
//     return async function signInRequest(dispatch, getState) {
//         if (!reducer.isLoggedIn(getState()))
//             return;
//
//         firebase.auth().signOut()
//             .then(() => {
//                 dispatch({type: actionTypes.LOGGED_OUT})
//             })
//             .catch(function (error) {
//                 console.error(error);
//             });
//     }
// }

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
