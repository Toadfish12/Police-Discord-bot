const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith("ping")) {
   message.channel.sendMessage(`Pong! \`${Date.now()- message.createdTimestamp}ms\``);
        }
      }
  module.exports.help = {
       name: "ping"
     }