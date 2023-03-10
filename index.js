require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('ready', () => {
  console.log("Ready: " + client.user.username);
});

client.on('messageCreate', async (msg) => {
  if (msg.author.id == client.user.id) return;
  
  if (msg.content.startsWith("!hi")) {
    msg.channel.send("hello!");
  }
});

client.login(process.env['DISCORD_BOT_TOKEN']);