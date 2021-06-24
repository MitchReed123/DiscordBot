const { Octokit, App, Action } = require("octokit");
require("dotenv").config();

module.exports = {
  name: "github",
  description: "github stuff",
  async execute(message, args, Discord, octokey) {
    const octokit = new Octokit({ auth: octokey });
    const {
      data: { login },
    } = await octokit.rest.users.getAuthenticated();
    console.log("Hello, %s", login);
    message.channel.send(`Hello ${login}`);

    await octokit.rest.issues.create({
      owner: `${login}`,
      repo: "ComponentLibrary",
      title: "Hello, world!",
      body: "I created this issue using Octokit!",
    });

    // await octokit.request("POST /repos/MitchReed123/ComponentLibrary/issues", {
    //   owner: "MitchReed123",
    //   repo: "ComponentLibrary",
    //   title: "Testing",
    //   body: "testing",
    // });
  },
};
