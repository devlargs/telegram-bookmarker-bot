require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg, match) => {
    const chatId = msg.chat.id;
    const res = 'Welcome to bookmarker bot where you can bookmark your stuff and retrieve it easily when you need it!';

    bot.sendMessage(chatId, res);
});