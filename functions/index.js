'use strict';

const functions = require('firebase-functions');
// const firebase = require('firebase');
//
// const firebaseConfig = {
//     apiKey: "AIzaSyAgz4f_lRZGVgE43U3oMc4KQFaYXkXJdyQ",
//     authDomain: "syw-foodie.firebaseapp.com",
//     databaseURL: "https://syw-foodie.firebaseio.com",
//     projectId: "syw-foodie",
//     storageBucket: "syw-foodie.appspot.com",
//     messagingSenderId: "504115679989"
// };

exports.register = functions.https.onRequest((req, res) => {
    console.log(req.body);

    // await firebase.initializeApp(firebaseConfig);

    // const user = {
    //     id: 1,
    //     name: 'Leeran'
    // };
    //
    // firebase.database().ref($`/users/{user.id}`).set(user);

    res.status(200).send('ok');
});
