const Discord = require('discord.js')
const bot = new Discord.Client()


bot.on("message", function(message) {
  bot.channels.get('361975566565638146').sendMessage(message)
});


bot.login('NDY2MjcyMTkyODg0MTEzNDA4.DiZpWg.93nl-a6JYBUJLrAypujisqPXzQw')
