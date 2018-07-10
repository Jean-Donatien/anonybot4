const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on("message", message => {
  if (message.content === "ping") {
    message.reply("pong !");
  }
});

bot.on("message", message => {
     var prefix = "!bot";
     const messageSlice = message.content.slice(prefix.lenght).trim();
     message.channel.send(messageSlice)
});

//bot.channels.get('361975566565638146').sendMessage(message)

bot.login('NDY2MjcyMTkyODg0MTEzNDA4.DiZpWg.93nl-a6JYBUJLrAypujisqPXzQw')
