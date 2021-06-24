module.exports = {
  name: "clear",
  description: "command to clear chat",
  async execute(message, args, Discord) {
    try {
      if (!args[0])
        return message.reply(
          "Please enter the amount of messages you want cleared"
        );
      if (isNaN(args[0])) return message.reply("please enter a real number!");
      //max clear is 100 per command
      if (args[0] > 100)
        return message.reply(
          "You cant clear more than 100 messages per command"
        );

      if (args[0] < 1)
        return message.reply("you need to clear atleast one message or more");

      await message.channel.messages
        .fetch({ limit: args[0] })
        .then((messages) => {
          message.channel.bulkDelete(messages);
        });
    } catch (error) {
      console.error(err);
    }
  },
};
