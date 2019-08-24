const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("614865184481345570")
setInterval(function() {
channel.send(`money`);
}, 30)
})

client.login(process.env.spam);
