const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let helpembed = new Discord.RichEmbed()
 .setDescription("Help Menu")
 .addField("Member Commands","help, serverinfo, boinfo, userinfo and report and coins and pay!")
  
 message.author.send(helpembed);

if(!message.member.hasPermission("MANAGE_MESSAGES")){

}
 let modembed = new Discord.RichEmbed()
 .setDescription("Mod Help Menu")
 .setColor("#8300ff")
 .addField("Mod Commands","addrole, removerole, kick, warn, warnlevel, ban, mute");

   try{
     await message.author.send(modembed)
  }catch(e){
    message.reply("Your DMS ARE LOCKED I cannot send you the mod commands");
  }
}

module.exports.help = {
    name:"help"
}