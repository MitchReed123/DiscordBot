module.exports = {
  name: "testingargs",
  description: "testing for args",
  async execute(message, args, Discord) {
    try {
      var reasonarray = [];
      var kickreason = "";
      const allmentions = [];
      message.mentions.users.mapValues((item) => {
        allmentions.push(item.username);
      });
      if (message.content.includes("%")) {
        // console.log("OK");

        for (let index = 0; index < args.length; index++) {
          if (args[index].includes("%")) {
            var newish = args[index].replace("%", "");
            reasonarray.push(newish);
          }
        }
        kickreason = reasonarray.join().replace(",", " ");
        console.log(kickreason);
      }

      if (message.content.includes("@")) {
        console.log("USERS");
        for (let index = 0; index < args.length; index++) {
          // const element = args[index];
          if (args[index].includes("@")) {
            console.log(args[index]);
          }
        }
      }
      if (allmentions.length > 1) {
        await message.mentions.users.mapValues(async (item) => {
          //item.id === users id
          const memberTarget = message.guild.members.cache.get(item.id);

          console.log("More than one user");
          try {
            if (memberTarget) {
              await memberTarget.kick({
                reason: `${kickreason}`,
              });
              message.channel.send(
                `${item.username} has been Kicked by ${message.author.username} for ${kickreason}`
              );
            } else {
              message.channel.send(
                "You couldnt kick that member/member doesnt exist"
              );
            }
          } catch (error) {
            console.error(error.name);
            console.error(error.message);
            if (
              error.name === "DiscordAPIError" &&
              error.message === "Missing Permissions"
            ) {
              message.reply(
                `You do not have permission to kick *${item.username}* from the server`
              );
            }
          }
        });
      } else if (allmentions.length === 1) {
        const member = message.mentions.users.first();
        console.log("Only one user");
        try {
          if (member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            await memberTarget.kick({
              reason: `${kickreason}`,
            });
            message.channel.send(
              `${member.username} has been kicked by ${message.author.username} for ${kickreason}`
            );
          } else {
            message.channel.send(
              "You couldnt kick that member/member doesnt exist"
            );
          }
        } catch (error) {
          console.log(error.name);
          console.log(error.message);
          if (
            error.name === "DiscordAPIError" &&
            error.message === "Missing Permissions"
          ) {
            message.reply(`You cannot kick ${member.username} from the server`);
          }
        }
      }
    } catch (err) {
      console.error(err.name);
    }
  },
};
