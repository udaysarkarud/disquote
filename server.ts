import express from "express";
import * as dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
const app = express();
const port = 8000;

//openai
const configuration = new Configuration({
  organization: process.env.OPENAI_ORG,
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

//discord
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", async function (message) {
  try {
    if (message.author.bot) return;
    message.reply(`Jah beda vodai`);
  } catch (err) {
    console.log(err);
  }
});

client.login(process.env.DISCORD_TOKEN);
console.log("Its online");
