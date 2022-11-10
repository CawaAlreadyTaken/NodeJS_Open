// Nuova cartella
// Cosa sono i Moduli di NodeJS?    https://www.npmjs.com/
//
// Modulo per gestire un bot telegram   
// https://www.npmjs.com/package/node-telegram-bot-api
const bot = require('node-telegram-bot-api');   // alla variabile bot assegniamo la "libreria" node-telegram-bot-api
                                                // E' necessario importare il modulo nella cartella di lavoro, con: "npm init" e poi "npm install node-telegram-bot-api"

const token = "5770840106:AAEdXVOFApMwb4ATKzChPhbHudfbUSTj5e0";  // Ci si reca sul botFather (su Telegram) e si da' il comando "/newbot". Una volta ottenuto il token, NON condividetelo!
                                                                 // Chiunque abbia il vostro token puo' controllare il bot

// Creazione di un bot con BotFather
const myBot = new bot(token, {polling: true});  // Si utilizza la variabile myBot per tenere il bot, "costruendolo" dalla libreria importata utilizzando il token
                                                // polling: true Fa si che il bot continui a controllare se arrivano messaggi o se accadono eventi, chiedendolo ai server di Telegram


// Gestione dell'evento "message"
myBot.on('message', async (msg) => {            // Ogni volta che arriva l'evento "message", esegui la funzione ASYNCrona che prende come parametro il "msg"
    console.log(msg);
    let testo = msg.text;                       // Il testo del messaggio si trova dentro "msg.text"
    let chatId = msg.chat.id;                   // Il chatId del messaggio si trova dentro msg.chat.id, ed indica la chat nella quale l'evento "messaggio" e' stato ricevuto
    await myBot.sendMessage(chatId, "ciao");    // Il bot invia il messaggio "ciao" nella chat, e aspetta che questo messaggio venga inviato, con "await" (da qua la funzione che deve essere "Async")
    myBot.sendMessage(chatId, testo);

    //Altri messaggi
    myBot.sendMessage(chatId, "nuovoCiao").then(() => myBot.sendMessage(chatId, "Fine"));  // Altro modo per inviare un messaggio sicuramente dopo ("then") un altro messaggio (alternativa ad "await")
})

// Esempio funzione asincrona
async function funzioneAsincrona(asd) {
    
}

// Moduli built-in, come "fs"
const fs = require('fs');                       // Sono moduli che possiamo gia' utilizzare in node senza dover dare "npm install <nome modulo>"

let testo = fs.readFileSync("prova.txt", "utf-8");  // leggi in maniera SYNCrona un file, e salva il contenuto dentro "testo"
console.log(testo);
fs.writeFileSync("prova.txt", "ciaooo");            // scrivi in maniera SYNCrona sul file
fs.appendFileSync("prova.txt", "asd");              // "Appendi" (scrivi in seguito, senza sovrascrivere) al file un certo testo
