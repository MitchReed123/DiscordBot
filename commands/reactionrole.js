module.exports = {
  name: "reactionrole",
  description: "set up a reaction role message",
  async execute(message, args, Discord, client) {
    const channel = "857338552983093248";

    const webdevrole = message.guild.roles.cache.find(
      (role) => role.name === "Web Dev"
    );
    const softwaredevrole = message.guild.roles.cache.find(
      (role) => role.name === "Software Dev"
    );
    //may have to run !reactionrole to redo it
    const softwaredevemoji = client.emojis.cache.find(
      (emoji) => emoji.name === "thinksharp"
    );
    const webdevemoji = client.emojis.cache.find(
      (emoji) => emoji.name === "react"
    );
    const embed = new Discord.MessageEmbed()
      .setColor("#304281")
      .setTitle("Choose your side")
      .addFields(
        { name: `${webdevemoji}`, value: "For Web-Dev" },
        { name: `${softwaredevemoji}`, value: "For Software-Dev" }
      )
      .setFooter("Feels like Star-Wars but 100x more serious of a decision");

    let messageEmbed = await message.channel.send(embed);

    messageEmbed.react(webdevemoji);
    messageEmbed.react(softwaredevemoji);

    client.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id === channel) {
        if (reaction.emoji.name === webdevemoji.name) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(webdevrole);
        }

        if (reaction.emoji.name === softwaredevemoji.name) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(softwaredevrole);
        }
      } else {
        return;
      }
    });

    client.on("messageReactionRemove", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id === channel) {
        if (reaction.emoji.name === webdevemoji.name) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(webdevrole);
        }

        if (reaction.emoji.name === softwaredevemoji.name) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(softwaredevrole);
        }
      } else {
        return;
      }
    });
  },
};
