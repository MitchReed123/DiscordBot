module.exports = {
  name: "ban",
  description: "bans user from server/guild",
  execute(message, args, Discord) {
    if (message.member.hasPermission("BAN_MEMBERS")) {
      const membercall = args[0];

      if (!membercall) return message.reply("Please provide a user to Ban.");
      try {
        const member = message.mentions.users.first();
        if (member) {
          const memberTarget = message.guild.members.cache.get(member.id);
          memberTarget.ban();
          message.channel.send(
            `${member.username} has been banned by ${message.author.username}`
          );
        } else {
          message.channel.send(
            `Either ${args[0]} does not exist on this server or you do not have permissions to kick them`
          );
        }
      } catch (err) {
        console.error(err.name);
        if (err.name === "DiscordAPIError") {
          message.reply(`You do not have the permission to kick ${args[0]}`);
        }
      }
    }
  },
};
