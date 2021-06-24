module.exports = {
  name: "command",
  description: "Embeds!",
  execute(message, args, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor("#304281")
      .setTitle("Rules")
      .setURL("https://www.google.com")
      .setDescription("This is a embed for the server rules")
      .addFields(
        { name: "Rule 1", value: "no shit posting losers" },
        { name: "Rule 2", value: "Seriously dont shit post" },
        { name: "Rule 3", value: "Ok stop shit posting nerds" }
      )
      .setImage(
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      )
      .setFooter("Make sure to not shit post ok?");

    message.channel.send(newEmbed);
  },
};
