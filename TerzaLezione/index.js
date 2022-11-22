const bot = require('node-telegram-bot-api');
const token = "5770840106:AAEdXVOFApMwb4ATKzChPhbHudfbUSTj5e0";
const myBot = new bot(token, {polling: true});

//Cos'e' una matrice? Perche' ci serve?


//reply_markup, [inline_keyboard (callback_data), keyboard (one_time_keyboard)]
//reply_to_message_id

//parse_mode, [markdown, html]


//sendPhoto con url
//sendPhoto da file
//{caption: }

myBot.on('message', async (msg) => {
    console.log(msg);
    let testo = msg.text;
    let chatId = msg.chat.id;
});

//on callback_query

