// if (message.author.bot) return;
// console.log(message.content);
// message.reply(`https://github.com/udaysarkarud/disquote`);

// import express from "express";
// import * as dotenv from "dotenv";
// import { Client, GatewayIntentBits } from "discord.js";
// import { Configuration, OpenAIApi } from "openai";
// import { promisify } from "util";
// import { setTimeout } from "timers";

// dotenv.config();
// const app = express();
// const port = 8000;

// //openai
// const configuration = new Configuration({
//   organization: process.env.OPENAI_ORG,
//   apiKey: process.env.OPENAI_KEY,
// });
// const openai = new OpenAIApi(configuration);

// //discord
// const client = new Client({
//   intents: [
//     GatewayIntentBits.Guilds,
//     GatewayIntentBits.GuildMessages,
//     GatewayIntentBits.MessageContent,
//   ],
// });
// const delay = promisify(setTimeout);
// const MIN_DELAY_BETWEEN_REQUESTS_MS = 1000; // 1 second

// client.on("messageCreate", async function (message) {
//   try {
//     if (message.author.bot) return;
//     // Delay before making the API request
//     await delay(MIN_DELAY_BETWEEN_REQUESTS_MS);

//     const getOpenRes = await openai.createCompletion({
//       model: "davinci",
//       prompt: "Hello, OpenAI!",
//       max_tokens: 5,
//       n: 1,
//       temperature: 0.5,
//     });

//     message.reply(`${getOpenRes.data.choices[0].text}`);
//     return;
//   } catch (err) {
//     console.log(err);
//   }
// });

// client.login(process.env.DISCORD_TOKEN);
// console.log("Its online");

// {

//     content: 'Sweet is the memory of distant friends! Like the mellow rays of the departing sun, it falls tenderly, yet sadly, on the heart.',
//     author: 'Washington Irving',
//     tags: [ 'Friendship' ],
//     authorSlug: 'washington-irving',
//     length: 126,
//     dateAdded: '2019-12-23',
//     dateModified: '2023-04-14'
//   }
