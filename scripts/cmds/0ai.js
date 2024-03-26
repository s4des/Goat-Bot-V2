const axios = require('axios');

const Prefixes = [
  'Goats',
  'wendy',
  'Mitama',
  '+ai',
  'nemo',
  'ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {

      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("🌊𝑃𝑂𝑆𝐸𝑍 𝑉𝑂𝑇𝑅𝐸 𝑄𝑈𝐸𝑆𝑇𝐼𝑂𝑁 ಢ‸ಢ .");
        return; de
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;


    await message.reply({ body: `

ಢ‸ಢ  𝐼𝐴
======================    
${answer}
======================𝑶𝑾𝑵𝑬𝑹 𝑩𝒀 𝑻𝒆𝑻𝒐ಢ‸ಢ `,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
