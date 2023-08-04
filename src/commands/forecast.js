const { SlashCommandBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
  .setName('forecast')
  .setDescription('Replies with the weather forecast!')
  .addStringOption((option) => {
    return option
      .setName('location')
      .setDescription('The location can be a city, zip/postal code, or a latitude and logitude.')
      .setRequired(true);
  })
  .addStringOption((option) => {
    return option
      .setName('units')
      .setDescription('The unit system of the results: either "metric" or "imperial".')
      .setRequired(false)
      .addChoices(
        { name: 'Metric', value: 'metric' },
        { name: 'Imperial', value: 'imperial' },
      );
  });

async function execute(interaction) {
  const location = interaction.options.getString('location');
  const units = interaction.options.getString('units');

  await interaction.reply('The weather is great!');
}

module.exports = {
  data,
  execute,
};