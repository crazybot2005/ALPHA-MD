const fs = require('fs-extra');
//const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61V2Y6jRhT9lahesdqsBVhqKQaz2rT3NcpDGQooL4CpwjYe9bdM3vKQj8gv5RMi2t2ZlmYy05HCU1HAveecOufyCWQ5obiPa9D5BIqSnBHDzZLVBQYdYFRxjEvQAhFiCHRAbZvdtgUXyzjxan2yinfivC7cp6UVw9mecc4tNbYQJYfl/hE8t0BRbQ8k/E7BJxlDNWhnvjET+67BmSRV9TY/ORNnGk5m4kIOh+7cGNt2+Aiem4qIlCRLrCLFR1yiQx/XI0TKj8FPRifCVt0aDYSRNtanqWMN5EXbWZ8wbIe2yw0cVbl6wfaQfwx+tmO5NHCnB2fBqdzNqevBYeNpisErtx05j+yztNuoznZfa3f4lCQZjrwIZ4yw+sO6E1OO8dmtep79NCqtnIf7obzC2dHX164f+VmxCD3MCerR+hjwiPant2MwuUoQ3uSLMs2s+daEo+08VaOtrJwTbUyT3NRW3ffAR+WbV/b/RXdukAgCaqdO6Z9j9CRzdKkt/GsUCLup1PbX21yeX6PRerXsfgw+HSnTwdSeCKzHiMtsqsNywTLmG1rQr0/I2m0Er2hv7cT7Ah+xqvweSt5Zu7DwbVvzc3nPkUPc3m1cwwjDbeBs+quoN/EWUuIVbsiWQzFZXZXSH6VVuBKUwRhFY44eL8xwBR+dJsE6cdLUTC+PL4z2uPYi0BGeW6DECaGsRIzkWbOnKi2AovMUhyVmL+qCpwODrlGdTi4vb27n4YVk1HaDy2ZSutyiT6ZRX7ruea1rrB9BCxRlHmJKceQSyvKyDjClKMEUdH55OaiGc4mPOcM+iUAH6IIOBVkWJVkUfqYPlxQxioriIcMMtEBc5scAgw4rK9wCLx9AW9YNCC1F4WUbqjovWbJhGrouiia0FblheLw3nZEjpgwdC9ARVFlVBZVXpOfW/4RDgIYgyrzdk6DVMwzFFHuaLEND4TVZgPwPcCj/Fw5ZtCwVmoqqKVCzFFGWu5rZk0yoWbpsqj/QA/LPv7ZAhq/sHqfGBJLQAjEpKZtnVXHIUfSWtbeHKAzzKmPTOgvNZoFL0Hm3jRkjWUIbZlWGyjAlZ2w2PEAnRgeK//EdLnH0xuV1lpp51MRBUa3RwIE2aLA3hb7SpqN/rc7hLoiuipIk6aoiKALs6D832y2QoaYSmObVT8ca/fTX5z9+e3h4+Ovz7382Cr1ib1pFmCFyoKADzNFoyMLAtfqnFQ0sx+laSddMuuAL17co37Ni9OZVNaalvTxexzGHhp7FCZy/R6Fpq3nGK5lxFuPTShSSx28UacAP9X6Rr6mqFXQ9yXmbydFiE7g3A3kB3FIxe7pcbnG92pf9alb1e+EJ8V41u4nZdTtMKpb1uILfm/Gyp7AqSp/0xc5oct8CET6TEL9vtt/2lBm/8Cw6C268/MQXJ8lk48kswMvdWbXtbLWGBuesqCG0ObugKFqudqulO55jRVG7OvGFRZh6DOIRxxwr2PtVOr4PmZchd3j9uZDX/JOX25jgl1n9eiI/OtU77sZ7/HPrXYnX4f8vA9QYj4VBuR/0r4uCzt32cUeMEYvJxsm6KYa+PtxctnoGDzpbg+cmBMUBsTgvj6ADUBaV+YtryrxqzOxlcf6dZmbX88zunfgBUdb9EpBvZE7W7m+NyrxwEU1BB0jx+mL2G7fX3aKYMsTe8ga6zdVjFDz/DQawsskhCQAA',
    PREFIXE: process.env.PREFIX || "+",
    GITHUB : process.env.GITHUB|| 'https://github.com/Keithkeizzah/ALPHA-MD',
    OWNER_NAME : process.env.OWNER_NAME || "Keith",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254748387615",  
    CHATBOT : process.env.CHATBOT || "no",  
    CHATBOT_INBOX : process.env.CHATBOT_INBOX || "yes",                     
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    AUTO_REACT: process.env.AUTO_REACTION || "yes",
    OWNER_REACT: process.env.OWNER_REACT || "yes",
    URL: process.env.URL || "https://files.catbox.moe/6hd2t7.jpg",  
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'yes',              
    EMOJIS: process.env.EMOJIS || "💜,💙,🤍,💗,🩷,🩵,❤️‍🔥,💛",
    AUTOBIO_MSG: process.env.AUTOBIO_MSG || "I DON'T GIVE A FUCK⚔️",
   GREET_MSG: process.env.GREET_MSG || "Huskii am unavailable mzee 😂",               
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "yes",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'no', 
    GREET : process.env.GREET || "yes", 
    VOICE_CHATBOT: process.env.VOICE_CHATBOT || 'no',
    VOICE_CHATBOT_INBOX: process.env.VOICE_CHATBOT_INBOX || 'yes',
              
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by alpha',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    AUTOBIO: process.env.AUTOBIO || 'yes',       
    ANTICALL_MSG : process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
    EVENTS :process.env.EVENTS || "yes",
    CAPTION : process.env.CAPTION || "ALPHA-MD",
    BOT : process.env.BOT_NAME || 'ALPHA_MD',
    MODE: process.env.PUBLIC_MODE || "yes",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTICALL: process.env.ANTICALL || 'yes',              
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
