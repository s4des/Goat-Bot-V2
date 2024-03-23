yconst axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
	config: {
		name: "leave",
		aliases: ["l"],
		version: "1.0",
		author: "Sandy",
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage('🌊𝑉𝑜𝑢𝑠 𝑛𝑒 𝑚𝑒 𝑚𝑒𝑟𝑖𝑡𝑒𝑟 𝑝𝑎𝑠 𝑏𝑎𝑛𝑑𝑒 𝑑𝑒 𝑝𝑒𝑟𝑣𝑒𝑟𝑠', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	};
