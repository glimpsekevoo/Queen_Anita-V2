//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "234906628353";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0wzK2JtUkFDdnVQQ0E1N2R1WVRyTnRBZ0o3WlVkNlVNNlVmeGlnVVAxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0ZoSzhrYjJ2Ulp3eGxtVDBOeEJUbEUyMDhoL05RL0ZXbjBJekdzek5pbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRWQ5ZytRM2Q2MXNOQ2xwTjNuRUpIbXl0a0hrbW90U0E1QnJxRjhWVVcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoSmVTbVFaNjFZSTJLZVdQeTlhVVZhSVdObGZDY1VQUUlZY2grM2hoczFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVDeUxWaCtZeGp2MTMzWjRhaWE5SzJpdW9vWXl4MnFWdGcvMzMyeXRGR1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpiNW1XOXRoRXN2MU9PZDN1b0tJZlIwd0p3ckFvZU8rbHVZR2pJM3hRR0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0hhQ0MrcFpZNjVJV2EycnQ4RjVMb3RJUzFHV2Y4VHpOa3Ayb3loZjVsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUElBNExSUGxyaUgrb0xNcVU2T0tuYXQ4M01IRlZzZEZMdkl1QjRrZWgyOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRDem9NTEsxQldjL0RoeWZxdmowZE1QdFNCcHhMVGk2RGtGdU9RelN5bW1mQmo4VWgxYkhSMjNueEVNb3ZPbzRYQ1JTTXN5MWtyOS9hSXBsa0k2dkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYxLCJhZHZTZWNyZXRLZXkiOiI1QUplNktwZkRuc010YVJmY2RsVUpZNWYyQ2tDKzZWV2dqcTV3UmZRSU1vPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfbEptdXVxbVR6aW9NYkl3VXBWQTFnIiwicGhvbmVJZCI6IjU5MzRmODA0LTg1OGQtNGQ0My04ODg3LTM0NjIyOGJjYmIzYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3SkNXVUozY2NvUnV6b0dBamdEeEc5Wk1uemc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlVZVEZlbGFuTGJxOUY5aEQzaHFmN0N6WjlJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZITUEySkw2IiwibWUiOnsiaWQiOiIyNTQ3OTg1MTUwNTI6MzNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiflByaW5jZSByb2NreSB3cnkgLMK/wr8/PyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGlKcWRnSEVLQzZ0clFHR0RrZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidnJ6SnN6MjY1cG4zYWtSUmpPaDFFMGVwQkE2VHF4SXpTQVo3anF1bXJROD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZTZLSkpvR0dlTDJjOGxjeDd4U1BMOHVyYjN1Njl3RG5Eb3ZvaHhmMStKbTIvYXhZNFBNbnBpY2wrazA2QzNqeG9CenpVdlpibnpaUlhiU3krV3dYQUE9PSIsImRldmljZVNpZ25hdHVyZSI6InRHZkpGSGJwY1Vtb1NnVm9QOGxkWUFRY0JaOWFoRm8vM1dHQTN0MmpqcVhITjhaQXd4ZC9YMFc5MDh5Y0V1YU92QzBPbUVxa3Nxa3d5ZGZpWnNQOENBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0Nzk4NTE1MDUyOjMzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmI2OHliTTl1dWFaOTJwRVVZem9kUk5IcVFRT2s2c1NNMGdHZTQ2cnBxMFAifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA1NTY4NDUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQStIIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
