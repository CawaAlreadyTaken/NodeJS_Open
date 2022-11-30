const Bot = require('node-telegram-bot-api');
const token = "5770840106:AAEdXVOFApMwb4ATKzChPhbHudfbUSTj5e0";
const bot = new Bot(token, {polling: true});

//Cos'è una matrice? Perchè ci serve?

//Questa parte di codice serve quando c'e' un errore, e ricevete solo
// "polling_error". Aggiungendo queste righe, verra' invece stampato
// l'errore completo
bot.on('polling_error', (msg) => {
    console.log(msg);
});

//sendPhoto con url
//sendPhoto da file
//{caption: }

// Siamo nell'evento "ricezione di un messaggio"
bot.on('message', async (msg) => {
    console.log(msg);  // Stampiamo il messaggio
    let testo = msg.text;  // Otteniamo il testo del messaggio
    let chatId = msg.chat.id;  // Otteniamo il "chatId" della chat in cui abbiamo ricevuto il messaggio
    if (testo === '/pulsanti') {
        // Se il testo mandato dall'utente era "/pulsanti", mandiamo un messaggio "particolare"
        // Ovvero, alla solita funzione "sendMessage", aggiungiamo un terzo argomento.
        // Il terzo argomento e' nella forma: {attributo1: valore1, attributo2: valore2, ...}
        // Per mandare dei pulsanti che si vedano nella chat, "attributo1" deve essere "reply_markup"
        // "valore1", a sua volta, deve essere nella forma: {a:b, c:d, ....}
        // A questo, come unico attributo, possiamo mettere "inline_keyboard" (che sono i pulsanti in chat, NON quelli nella tastiera, che vedremo dopo)
        // come valore di "inline_keyboard", dobbiamo passare una matrice (un'array di array)
        // che abbia la forma dei pulsanti che vogliamo mandare. Ogni "parentesi interna" rappresenta una riga, sulla quale possono stare uno o piu' pulsanti
        // Infine, ogni pulsante e' nuovamente nella forma {text: "testo mostrato", callback_data: "data"}
        // Per ogni pulsante, il valore assegnato a callback_data servira' per riconoscere la pressione di un preciso pulsante.
        bot.sendMessage(chatId, "Ecco i pulsanti:", {
            reply_markup: {
                inline_keyboard: [
                    [
                        {text: "Pulsante1", callback_data: "puls1"},
                        {text: "Pulsante2", callback_data: "puls2"}
                    ],
                    [
                        {text: "Pulsante3", callback_data: "puls3"}
                    ]
                ]
            }
        });
    } else if (testo === '/tastiera') {
        // Invece, se l'utente ha mandato il testo "/tastiera", manderemo dei pulsanti che compaiono sulla tastiera.
        // Allo stesso modo, usiamo sendMessage con un terzo argomento
        // Come prima, specifichiamo il reply_markup, che questa volta prende un argomento "leyboard". Questo e' composto, come prima, da una matrice di pulsanti
        // Questa volta i pulsanti non hanno una callback_data, ma solo un testo, perche' nel momento in cui l'utente preme un "pulsante da tastiera", il testo del pulsante verra' mandato nella chat, come se fosse stato l'utente a scriverlo
        bot.sendMessage(chatId, "Ti ho inviato i pulsanti su tastiera", {
            reply_markup: {
                one_time_keyboard: true, //Questo argomento fa si che i pulsanti lascino subito posto nuovamente alla tastiera quando premuti
                keyboard: [
                    [
                        {text: 'Pulsantino'},
                        {text: 'altro'}
                    ],
                    [
                        {text: '/pulsanti'}
                    ]
                ]
            }
        });
    } else if (testo === '/rispondimi') {
        // Se invece il messaggio dell'utente e' "/rispondimi", allora prendiamo il messageId relativo a tale messaggio, ed utilizziamo nuovamente la funzione sendMessage della libreria, con il terzo parametro.
        // Questa volta, il terzo parametro non ha alcun "reply_markup" come attributo, invece usa il "reply_to_message_id", a cui passiamo l'id del messaggio dell'utente
        let messageId = msg.message_id;
        bot.sendMessage(chatId, "Ti sto rispondendo", {
            reply_to_message_id: messageId
        });
    } else if (testo === '/foto') {
        // Se poi vogliamo inviare una foto, possiamo usare la funziona "sendPhoto", che manda foto o dal nostro pc (in questo caso, foto.jpg si trova nella stessa cartella dell'index.js), o da un link su internet.
        // sendPhoto, volendo, prende un terzo parametro (facoltativo), in cui possiamo specificare una descrizione alla foto, con "{caption: ...}"
        bot.sendPhoto(chatId, "foto.jpg", {caption: "foto cartoline"});
    }
});

//on callback_query
bot.on('callback_query', (call) => {
    // Quando un utente preme un inline_keyboard button (occhio, NON sono quelli sulla tastiera, sono quelli nella chat), il bot riceve una "callback_query", che contiene fra le altre cose, anche la callback_data del pulsante, specificata quando abbiamo creato il pulsante. Qua, ad esempio, era quello che abbiamo fatto alle righe 38, 39 e 42
    let tastoPremuto = call.data; // Cosi' accediamo al "callback_data" di cui sopra
    let chatId = call.message.chat.id; // La callback_query contiene anche altre informazioni utili oltre al callback_data, ad esempio l'id della chat in cui il pulsante e' stato premuto.
    //Infine, filtriamo per callback_data ricevuta e comunichiamo all'utente quale pulsante ha appena premuto
    if (tastoPremuto === "puls1") {
        bot.sendMessage(chatId, "Hai premuto il primo pulsante");
    } else if (tastoPremuto === "puls2") {
        bot.sendMessage(chatId, "Hai premuto il secondo pulsante");
    } else if (tastoPremuto === "puls3") {
        bot.sendMessage(chatId, "Hai premuto il terzo pulsante");
    }
})
