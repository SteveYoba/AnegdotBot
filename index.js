const { gameOptions, againOptions } = require('./options')
const {jokes} = require ('./jokes')

const TelegramApi = require('node-telegram-bot-api')

const token = '1696831095:AAFCn-ecqYfokfeXd7KaquyBX7u5BuJZolg'
const stikHihihi = 'CAACAgQAAxkBAAIBqGE07CWBVzxax-6C4PN7w2c0mPy9AALJCAAC1KEgUEQD-JNUTGn6IAQ'
const bot = new TelegramApi(token, {polling: true});

const start = () => {

bot.setMyCommands ([
    {command:'/start', description: 'Здарова йопта'},
    {command:'/anegdot', description: 'Случайный анегдот'},
])

bot.on('message', async (msg)  => {
    const chatId = msg.chat.id;
    const text = msg.text
    const name = msg.from.username

    if (text == '/start') 
        return bot.sendMessage (chatId, 'Чел, тЫ...')
    if (text == '/anegdot') {
        return bot.sendMessage(chatId, "ВНИМАНИЕ РЖОМБА", gameOptions)
    }
    if (text == 'привет')
        return bot.sendMessage (chatId, `Иди нахуй, лол XD`)
    if (!text) 
        return bot.sendMessage (chatId, `Ебать это что? Пещерная мазня?`)
    await bot.sendMessage(chatId, `АХАХАХХА ${name} реально '${text}' написал`);
    return bot.sendSticker(chatId, stikHihihi)
});
    bot.on('callback_query', msg => {
        const chatId = msg.message.chat.id
        const data = msg.data
        jokeLength = jokes.length
        const randomNumber = Math.floor(Math.random() * (jokeLength - 1)) + 1;
        if (data == 'anekButton')
        return bot.sendMessage(chatId, jokes[randomNumber], againOptions)
    })
    bot.on("polling_error", console.log)
}

start ()