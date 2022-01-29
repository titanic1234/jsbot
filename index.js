const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const g = require('./src/giveaway.json');
const disbut = require('discord-buttons');
disbut(client);
console.log("Imports");
const prefix = '!#';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./src/commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./src/commands/${file}`);

    client.commands.set(command.name, command);
}

console.log("Erste for");


client.once('ready', () => {
    console.log(`==========================================`);
    console.log(`Eingeloggt als ${client.user.tag} auf ${client.guilds.cache.size} Servern.`);
    console.log(`==========================================`);
    client.user.setActivity({"name": "ItIzYe", "type": "LISTENING"});
});

console.log("Ready");

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command === "ping") {
        client.commands.get("ping").execute(message, args);
    } else if (command === "ping2") {
        client.commands.get("ping2").execute(message, args);
    }
});

console.log("Message");

client.login(process.env.Discord_Bot_Token);
