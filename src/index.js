require('dotenv').config();

const {
  Client,
  Events,
  GatewayIntentBits,
  REST,
} = require('discord.js');

const { clientReadyHandler } = require('./events/clientReady');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
  ]
});

client.on(Events.ClientReady, clientReadyHandler);

client.login();