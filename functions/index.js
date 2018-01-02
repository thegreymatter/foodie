'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const TelegramBot = require('node-telegram-bot-api');

admin.initializeApp(functions.config().firebase);

const bot = new TelegramBot('522468127:AAETX_HkbExIVQ9FiJc2_kvxCDLnuz4zyoU');

exports.register = functions.https.onRequest((req, res) => {
    console.log('New message from user!');
    console.log(req.body);

    handleMessage(req, res);
});

function handleMessage(req, res) {
    const message = req.body.message;

    if (message.text === '/start') {
        start(message);
        res.status(200).send('ok');
        return;
    }

    if (message.type === 'contact_message') {
        register(message);
        res.status(200).send('ok');
        return;
    }

    res.status(403).send('Forbidden!');
}

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

function register(message) {
    const chatId = message.chat.id;
    const phone = extractPhoneNumber(message);

    const user = {
        id: message.from.id,
        phone: phone,
        chatId: chatId
    };

    admin.database().ref('/employees/' + phone).once('value', (data) => {
        user.searsId = data.searsId;
        user.name = data.name;
    });

    saveUser(user);
    bot.sendMessage(chatId, 'Thanks for signing up!');
}

function extractPhoneNumber(message) {
    return '0525604050';
}

function saveUser(user) {
    admin.database().ref('/users/' + user.id).set(user);
}