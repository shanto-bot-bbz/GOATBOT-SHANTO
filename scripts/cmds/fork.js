module.exports = {
  config: {
    name: "fork",
    aliases: ["repo", "link"],
    version: "1.0",
    author: "shanto",
    countDown: 3,
    role: 0,
    longDescription: "Returns the link to the official, updated fork of the bot's repository.",
    category: "system",
    guide: { en: "{pn}" }
  },

  onStart: async function({ message }) {
    const text = "𝗦𝗵𝗮𝗻𝘁𝗼𝗿 𝗳𝗼𝗿𝗸 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗮𝗸𝗮𝘀𝗵 𝗮𝗿 𝘁𝗮 𝗻𝗲🐱 - https://github.com/akashx404/GOAT-ADVANCED.git";
    
    message.reply(text);
  }
};
