'use strict';

const functions = require('firebase-functions');
// const firebase = require('firebase');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
// firebase.initializeApp(firebaseConfig);
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
    console.log('New message from user!');
    console.log(req.body);

    switch (req.body.message.text) {
        case '/start':
            const user = {
                id: req.body.message.from.id,
                firstName:  req.body.message.from.firstName,
                lastName:  req.body.message.from.lastName
            };

            console.log('Registering user... user info: ' + JSON.stringify(user));

            admin.database().ref('/users/' + user.id).set(user);

            res.status(200).send('ok');
            return;

        default:
            res.status(403).send('Forbidden!');
            return;
    }
});
