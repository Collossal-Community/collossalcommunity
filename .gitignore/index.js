const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("c")

bot.on('ready', function() {
    bot.user.setGame("Joue à rien du tout");
    console.log("Collossal Community est connecté au Discord");
});

bot.login('NTUyOTEzMzg4ODMzODY1Nzc5.D2bCgg.IlO89z2S7mgUelMZ8V0PLE42Rf0');


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.send("Liste des commande : \n ```chelp```");
        console.log("Commande chelp faîtes avec succès !")
        message.delete();
    }
    
    if (message.content === "Salut"){
        message.channel.send("Hey !")
        console.log("Répond à 'Salut'")
        message.delete();
    }
});
