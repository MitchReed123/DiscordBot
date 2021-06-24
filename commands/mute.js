const ms = require("ms");

module.exports = {
  name: "mute",
  description: "This mutes a member",
  execute(message, args, Discord) {
    const target = message.mentions.users.first();

    if (target) {
      let mainrole = message.guild.roles.cache.find(
        (role) => role.name === "Member"
      );
      let muteRole = message.guild.roles.cache.find(
        (role) => role.name === "Muted"
      );

      let memberTarget = message.guild.members.cache.get(target.id);
      if (!args[1]) {
        memberTarget.roles.remove(mainrole.id);
        memberTarget.roles.add(muteRole.id);

        message.channel.send(`<@${memberTarget.user.id}> has been muted`);
        return;
      }

      memberTarget.roles.remove(mainrole.id);
      memberTarget.roles.add(muteRole.id);
      message.channel.send(
        `<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`
      );

      new Promise(function (resolve, reject) {
        setTimeout(() => {
          memberTarget.roles.remove(muteRole.id);
          memberTarget.roles.add(mainrole.id);
        }, ms(args[1]));
      });
      //   setTimeout(() => {
      //     // message.channel.send(`<@${memberTarget.user.id}> has been muted`);
      //   }, ms(args[1]));
    } else {
      message.reply(`Can't find member`);
    }
  },
};
