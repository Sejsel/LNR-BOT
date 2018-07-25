require('dotenv').config()
const Eris = require("eris");

var bot = new Eris(process.env['BOT_TOKEN']);
// Replace BOT_TOKEN with your bot account's token

bot.on('ready', () => { // When the bot is ready
    console.log('Ready!') // Log "Ready!"
});

bot.on('messageCreate', (msg) => { // When a message is created
    console.log(msg.content)
    if(msg.content === "!ping") { // If the message content is "!ping"
        bot.createMessage(msg.channel.id, 'Pong!')
        // Send a message in the same channel with "Pong!"
    } else if(msg.content === '!pong') { // Otherwise, if the message is "!pong"
        bot.createMessage(msg.channel.id, 'Ping!')
        // Respond with "Ping!"
    }
});

bot.on('debug', console.debug)

bot.connect() // Get the bot to connect to Discord

process.on('warn', console.warn)

process.on('unhandledRejection', (err) => {
  console.error(err)
})

process.on('uncaughtException', (err) => {
  console.error(err)
  process.exit(1)
})
