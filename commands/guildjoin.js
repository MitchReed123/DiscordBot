module.exports = {
  name: "guildjoin",
  description: "guild join stuff",
  execute(member, Discord) {
    const welcomeChannel = member.guild.channels.cache.find(
      (channel) => channel.name === "welcome"
    );

    const role = member.guild.roles.cache.find(
      (role) => role.name === "Member"
    );

    member.roles.add(role.id);
    welcomeChannel.send(`Welcome ${member.user.tag}`);
  },
};
