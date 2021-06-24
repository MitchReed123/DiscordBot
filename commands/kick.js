module.exports = {
  name: "kick",
  description: "kick",
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
              message.author.send(
                `You do not have permission to kick *${item.tag}*  from the server`
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
            await message.channel.messages
              .fetch({ limit: 5 })
              .then((messages) => message.channel.bulkDelete(messages))
              .then((item) => {
                const newEmbed = new Discord.MessageEmbed()
                  .setColor("#e60624")
                  .setTitle("This is the Moderation Channel")
                  .setURL("https://www.google.com")
                  .setDescription(
                    "You wont see anything but this in the channel"
                  )
                  .setImage(
                    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  )
                  .setFooter("Make sure to not shit post ok?");

                message.channel.send(newEmbed);
              });
          } else {
            message.channel.send("Member doesnt exist");
          }
        } catch (error) {
          console.log(error.name);
          console.log(error.message);
          if (
            error.name === "DiscordAPIError" &&
            error.message === "Missing Permissions"
          ) {
            // message.reply(`You cannot kick ${member.username} from the server`);
            message.author.send(
              `You do not have permission to kick *${member.tag}*  from the server`
            );
          }
        }
      }
    } catch (err) {
      console.error(err.name);
    }
  },
};
