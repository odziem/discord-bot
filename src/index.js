require('dotenv').config();

const {
  Client,
  Collection,
  Events,
  GatewayIntentBits,
} = require('discord.js');

const { clientReadyHandler } = require('./events/clientReady');
const { interactionCreateHandler } = require('./events/interactionCreate');

const pingCommand = require('./commands/ping');
const forecastCommand = require('./commands/forecast');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
  ]
});

client.commands = new Collection();

client.commands.set(pingCommand.data.name, pingCommand);
client.commands.set(forecastCommand.data.name, forecastCommand);

client.once(Events.ClientReady, clientReadyHandler);

client.on(Events.InteractionCreate, interactionCreateHandler);

client.login();