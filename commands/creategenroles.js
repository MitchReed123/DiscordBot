module.exports = {
  name: "creategenroles",
  description: "Creates new base roles for discord server",
  execute(message, args, Discord) {
    const memberRole = message.guild.roles.cache.find(
      (role) => role.name === "Member"
    );

    const adminRole = message.guild.roles.cache.find(
      (role) => role.name === "Admin"
    );

    const devRole = message.guild.roles.cache.find(
      (role) => role.name === "Dev"
    );

    const twitchMod = message.guild.roles.cache.find(
      (role) => role.name === "TwitchMod"
    );

    const tier1sub = message.guild.roles.cache.find(
      (role) => role.name === "Tier 1 Sub"
    );

    const tier2sub = message.guild.roles.cache.find(
      (role) => role.name === "Tier 2 Sub"
    );

    const tier3sub = message.guild.roles.cache.find(
      (role) => role.name === "Tier 3 Sub"
    );

    const patreonRole = message.guild.roles.cache.find(
      (role) => role.name === "Patreon Supporter"
    );

    const serverAdmin = message.guild.roles.cache.find(
      (role) => role.name === "Server Admin"
    );

    const ownerRole = message.guild.roles.cache.find(
      (role) => role.name === "Owner"
    );

    const generalPerms = [
      "VIEW_CHANNEL",
      "CREATE_INSTANT_INVITE",
      "CHANGE_NICKNAME",
      "SEND_MESSAGES",
      "EMBED_LINKS",
      "ATTACH_FILES",
      "ADD_REACTIONS",
      "USE_EXTERNAL_EMOJIS",
      "READ_MESSAGE_HISTORY",
    ];

    const normalpermslist = new Discord.Permissions([
      "ADD_REACTIONS",
      "ATTACH_FILES",
      "CHANGE_NICKNAME",
      "CONNECT",
      "CREATE_INSTANT_INVITE",
      "READ_MESSAGE_HISTORY",
      "SEND_MESSAGES",
      "SPEAK",
      "STREAM",
      "USE_EXTERNAL_EMOJIS",
      "VIEW_CHANNEL",
      "EMBED_LINKS",
    ]).toArray();

    const adminpermslist = new Discord.Permissions([
      "USE_VAD",
      "BAN_MEMBERS",
      "DEAFEN_MEMBERS",
      "KICK_MEMBERS",
      "MANAGE_CHANNELS",
      "MANAGE_EMOJIS",
      "MANAGE_GUILD",
      "MANAGE_MESSAGES",
      "MANAGE_NICKNAMES",
      "MANAGE_ROLES",
      "MANAGE_WEBHOOKS",
      "MENTION_EVERYONE",
      "MOVE_MEMBERS",
      "MUTE_MEMBERS",
      "PRIORITY_SPEAKER",
      "VIEW_AUDIT_LOG",
      "VIEW_GUILD_INSIGHTS",
      "SEND_TTS_MESSAGES",
      //   "ADMINISTRATOR",
    ]).toArray();

    if (!memberRole) {
      message.guild.roles
        .create({
          data: {
            name: "Member",
            color: "#99aab5",
            permissions: generalPerms,
            hoist: true,
          },
        })
        .then((role) => {
          message.channel.send(
            `Created ${role.name} for ${message.guild.name} this role has ${role.permissions}.`
          );
        });
    }

    if (!adminRole) {
      message.guild.roles
        .create({
          data: {
            name: "Admin",
            color: "#f4ff00",
            permissions: adminpermslist,
            hoist: true,
          },
        })
        .then((role) => {
          message.channel.send(
            `Created ${role.name} for ${message.guild.name} this role has ${role.permissions}.`
          );
        });
    }

    if (!devRole) {
      message.guild.roles
        .create({
          data: {
            name: "Dev",
            color: "#e91e63",
            permissions: generalPerms,
            hoist: true,
          },
        })
        .then((role) => {
          message.channel.send(
            `Created ${role.name} for ${message.guild.name} this role has ${role.permissions}.`
          );
        });
    }

    if (!twitchMod) {
      message.guild.roles
        .create({
          data: {
            name: "Twitch Mod",
            color: "#71368a",
            permissions: generalPerms,
            hoist: true,
          },
        })
        .then((role) => {
          message.channel.send(
            `Created ${role.name} for ${message.guild.name} this role has ${role.permissions}.`
          );
        });
    }

    if (!tier1sub) {
      message.guild.roles
        .create({
          data: {
            name: "Tier 1 Sub",
            color: "#a808a4",
            permissions: generalPerms,
            hoist: true,
          },
        })
        .then((role) => {
          message.channel.send(
            `Created ${role.name} for ${message.guild.name} this role has ${role.permissions}.`
          );
        });
    }

    if (!tier2sub) {
      message.guild.roles
        .create({
          data: {
            name: "Tier 2 Sub",
            color: "#3498db",
            permissions: generalPerms,
            hoist: true,
          },
        })
        .then((role) => {
          message.channel.send(
            `Created ${role.name} for ${message.guild.name} this role has ${role.permissions}.`
          );
        });
    }

    if (!tier3sub) {
      message.guild.roles
        .create({
          data: {
            name: "Tier 3 Sub",
            color: "#11806a",
            permissions: generalPerms,
            hoist: true,
          },
        })
        .then((role) => {
          message.channel.send(
            `Created ${role.name} for ${message.guild.name} this role has ${role.permissions}.`
          );
        });
    }

    if (!patreonRole) {
      message.guild.roles
        .create({
          data: {
            name: "Patreon Supporter",
            color: "#e74c3c",
            permissions: generalPerms,
            hoist: true,
          },
        })
        .then((role) => {
          message.channel.send(
            `Created ${role.name} for ${message.guild.name} this role has ${role.permissions}.`
          );
        });
    }

    if (!serverAdmin) {
      message.guild.roles
        .create({
          data: {
            name: "Server Admin",
            color: "#e74c3c",
            permissions: ["ADMINISTRATOR"],
            hoist: true,
          },
        })
        .then((role) => {
          message.channel.send(
            `Created ${role.name} for ${message.guild.name} this role has ${role.permissions}.`
          );
        });
    }

    if (!ownerRole) {
      message.guild.roles
        .create({
          data: {
            name: "Server Admin",
            color: "#e74c3c",
            permissions: ["ADMINISTRATOR"],
            hoist: true,
          },
        })
        .then((role) => {
          message.channel.send(
            `Created ${role.name} for ${message.guild.name} this role has ${role.permissions}.`
          );
        });
    }
  },
};
