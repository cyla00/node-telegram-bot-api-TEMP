const TelegramBot = require('node-telegram-bot-api');
const token = '996898831:AAHerDdP3Rmlqw3GuRzd34hiQ7r6VEmXjMQ';
const bot = new TelegramBot(token, {polling: true});

              // comando + risposta START
bot.onText(/\/start/, (msg) => {
bot.sendMessage(msg.chat.id, "\"Sono tanto semplici li uomini, e tanto obediscono alle necessità presenti, che colui che inganna troverà sempre chi si lascerà ingannare☕...\"");
});

            // comandi basici bot

// ciao
bot.onText(/\/ciao/, (msg) => {
bot.sendMessage(msg.chat.id, "hey!");
});

// machiavelli
bot.onText(/\/machiavelli/, (msg) => {
bot.sendMessage(msg.chat.id, "\"Consigliati delle cose che tu dei fare con molti; quello che dipoi vuoi fare conferisci con pochi☕...\"");
});

// platone
bot.onText(/\/machiavelli/, (msg) => {
bot.sendMessage(msg.chat.id, "\"Consigliati delle cose che tu dei fare con molti; quello che dipoi vuoi fare conferisci con pochi☕...\"");
});

// cartesio
bot.onText(/\/machiavelli/, (msg) => {
bot.sendMessage(msg.chat.id, "\"Consigliati delle cose che tu dei fare con molti; quello che dipoi vuoi fare conferisci con pochi☕...\"");
});


// freud
bot.onText(/\/machiavelli/, (msg) => {
bot.sendMessage(msg.chat.id, "\"Consigliati delle cose che tu dei fare con molti; quello che dipoi vuoi fare conferisci con pochi☕...\"");
});


// shopenauer
bot.onText(/\/machiavelli/, (msg) => {
bot.sendMessage(msg.chat.id, "\"Consigliati delle cose che tu dei fare con molti; quello che dipoi vuoi fare conferisci con pochi☕...\"");
});
