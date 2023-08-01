require('dotenv').config();

const {
  Client,
  Events,
  GatewayIntentBits,
} = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
  ]
});

client.on(Events.ClientReady, () => {
  console.log('Logged in!');
});

client.login();