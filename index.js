const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
const prefix = "!";
var octokey = process.env.OCTO_TOKEN;
const fs = require("fs");
//discord collections
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("EverythingBot is Online!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase();
  // if i need to see the args that are being passed through uncomment this console.log()
  //   console.log(args.map((item) => item));
  //   if (command === "ping") {
  //     client.commands.get("ping").execute(message, args);
  //   }
  if (command === "command") {
    client.commands.get("command").execute(message, args, Discord);
  } else if (command === "clear") {
    client.commands.get("clear").execute(message, args, Discord);
  } else if (command === "kick") {
    client.commands.get("kick").execute(message, args, Discord);
  } else if (command === "ban") {
    client.commands.get("ban").execute(message, args, Discord);
  } else if (command === "testingargs") {
    client.commands.get("testingargs").execute(message, args, Discord);
  } else if (command === "creategenroles") {
    client.commands.get("creategenroles").execute(message, args, Discord);
  } else if (command === "mute") {
    client.commands.get("mute").execute(message, args, Discord);
  } else if (command === "unmute") {
    client.commands.get("unmute").execute(message, args, Discord);
  } else if (command === "reactionrole") {
    client.commands.get("reactionrole").execute(message, args, Discord, client);
  }

  if (command === "github") {
    client.commands.get("github").execute(message, args, Discord, octokey);
    // client.commands.get("reactionrole").execute(message, args, Discord, client);
  }
});

client.on("guildMemberAdd", (member) => {
  let welcomeRole = member.guild.roles.cache.find(
    (role) => role.name === "Member"
  );

  member.roles.add(welcomeRole.id);

  member.guild.channels.cache
    .get("857198474767761421")
    .send(
      `Welcome <@${member.user.id}> to our server! Make sure to follow the rules.`
    );
  //   client.commands.get("guildjoin").execute(member, Discord);
});

client.login(process.env.TOKEN);
