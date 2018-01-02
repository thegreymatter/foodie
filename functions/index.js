'use strict';

const functions = require('firebase-functions');

exports.register = functions.https.onRequest((req, res) => {
    console.log(req.query);

    res.status(200).send('ok');
});
