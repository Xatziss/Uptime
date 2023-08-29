const Discord = require('discord.js');
const { Client, IntentsBitField , EmbedBuilder , Collection , Events , GatewayIntentBits, embedLength , ButtonBuilder, ButtonStyle,ActionRowBuilder ,Component, ComponentType} = require('discord.js'); 
const client = new Client ({
    intents: [
        GatewayIntentBits.Guilds,
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildVoiceStates,
        
    ],
});
const prefix = '!'; // You can change this to your desired command prefix

client.on('ready', () => {
    let Guild = 
    console.log(`Logged in as ${client.user.tag}!`);
});
function formatUptime(ms) {
    const days = Math.floor(ms / 86400000);
    const hours = Math.floor(ms / 3600000) % 24;
    const minutes = Math.floor(ms / 60000) % 60;
    const seconds = Math.floor(ms / 1000) % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
client.on('messageCreate', message => {
    if (message.author.bot) return; // Ignore messages from bots
    if (!message.content.startsWith(prefix)) return; // Ignore messages without the prefix

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

     if (message.content === 'uptime') {
        const uptime = formatUptime(client.uptime);
        message.channel.send(`Bot uptime: ${uptime}`);
    }
});
client.on("messageCreate", message =>{
    if(message.content === "ping"){
        message.react("🤖")
    }
    if (message.content === 'uptime') {
        const uptime = formatUptime(client.uptime);
        message.channel.send(`Bot uptime: ${uptime}`);
    }
})


client.login("")