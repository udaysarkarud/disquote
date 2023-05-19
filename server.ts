import express from "express";
import * as dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";
import { PrismaClient } from "@prisma/client";

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
//prisma
const prisma = new PrismaClient();

client.on("messageCreate", async function (message) {
  try {
    if (message.author.bot) return;

    const allQuotes = await prisma.quotes.findMany({
      where: {
        tags: {
          contains: `${message.content.toLowerCase()}`,
        },
      },
    });

    console.dir(allQuotes);

    const getQuote = await axios.get(
      `https://api.quotable.io/quotes/random?tags=${message.content}`
    );
    //console.log(getQuote);

    if (getQuote.data[0] == undefined) {
      message.reply(`There is no quote related ${message.content} category`);
      return;
    } else {
      //prisma add
      await prisma.quotes.create({
        data: {
          author: getQuote.data[0].author.toLowerCase(),
          content: getQuote.data[0].content.toLowerCase(),
          tags: getQuote.data[0].tags.join(", ").toLowerCase(),
          dateAdded: getQuote.data[0].dateAdded.toLowerCase(),
        },
      });

      //send to discord
      const theQuote = `${getQuote.data[0].content}\nAuthor: ${
        getQuote.data[0].author
      } / Date: ${
        getQuote.data[0].dateAdded
      }\nCategories: ${getQuote.data[0].tags.join(", ")}`;

      message.reply(`${theQuote}`);
      //message.channel.send(`${theQuote}`);
      return;
    }
  } catch (err) {
    console.log(err);
  }
});

client.login(process.env.DISCORD_TOKEN);
console.log("Its online");
