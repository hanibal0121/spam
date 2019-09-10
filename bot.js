const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("616726847132008496")
setInterval(function() {
channel.send(`https://discord.gg/sxerPvN`);
}, 30)
})

client.login(process.env.spam);
