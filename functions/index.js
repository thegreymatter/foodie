'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const TelegramBot = require('node-telegram-bot-api');

admin.initializeApp(functions.config().firebase);

const bot = new TelegramBot('522468127:AAETX_HkbExIVQ9FiJc2_kvxCDLnuz4zyoU');

exports.register = functions.https.onRequest((req, res) => {
    console.log('New message from user!');
    console.log(req.body);

    handleMessage(message);
});

function start(message) {
    const chatId = message.chat.id;
    const text = 'Hi, I\'m Foodie! I can let you know when your food is here! To do so we need be in touch, can you please send me your phone?';
    const options = {
        parse_mode: 'Markdown',
        reply_markup: {
            keyboard: [{ text: 'Send my phone number', request_contact: true }],
            resize_keyboard: false,
            one_time_keyboard: false
        }
    };

    bot.sendMessage(chatId, text, options);
}

function handleMessage(message) {
    switch (message.text) {
        case '/start':
            start(message);
            res.status(200).send('ok');
            return;
            
        case '/contact':
            const user = {
                id: message.from.id,
                firstName: message.from.first_name,
                lastName: message.from.last_name
            };

            console.log('Registering user... user info: ' + JSON.stringify(user));

            admin.database().ref('/users/' + user.id).set(user);

            res.status(200).send('ok');
            return;

        default:
            res.status(403).send('Forbidden!');
            return;
    }
}