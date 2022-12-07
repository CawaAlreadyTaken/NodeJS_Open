const Bot = require('node-telegram-bot-api');
const token = "5770840106:AAEdXVOFApMwb4ATKzChPhbHudfbUSTj5e0";
const bot = new Bot(token, {polling: true});
const DB = require('./database.js');  // In questo modo si importa un altro file ".js"

const db = new DB();  // il "DB" importato e' una classe, quindi ne creo un'istanza con "new"

//Questa parte di codice serve quando c'e' un errore, e ricevete solo
// "polling_error". Aggiungendo queste righe, verra' invece stampato
// l'errore completo
bot.on('polling_error', (msg) => {
    console.log(msg);
});

// Siamo nell'evento "ricezione di un messaggio"
bot.on('message', async (msg) => {
    console.log(msg);  // Stampiamo il messaggio
    let testo = msg.text;  // Otteniamo il testo del messaggio
    let chatId = msg.chat.id;  // Otteniamo il "chatId" della chat in cui abbiamo ricevuto il messaggio
    bot.sendMessage(chatId, "*messaggio*", {parse_mode: "markdown"}); // Per mandare del messaggio in grassetto, o in italic (corsivo) etc, e' necessario racchiudere il testo nei caratteri corretti (* per il bold, _ per l'italic etc). Inoltre c'e' da specificare come terzo argomento della "sendMessage" la parse_mode a "markdown", altrimenti gli asterischi rimarranno asterischi senza essere interpretati
    console.log(db);
    db.write(); // Essendo db un'istanza della classe DB importata, possiamo usare le funzioni di quella classe, tra cui la "write"
});

