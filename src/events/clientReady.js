function clientReadyHandler(client) {
  console.log(`Logged in as ${client.user.tag}!`);
}

module.exports = {
  clientReadyHandler,
};