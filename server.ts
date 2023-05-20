import express from "express";
import * as dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
import { addNewQuoteToDB, getDbData } from "./db.service";
import { getQuoteFromApi } from "./api.service";

dotenv.config();
const app = express();
const port = 8000;

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
    //get data from db
    const getQuotesFromDB = await getDbData(message.content.toLowerCase());

    if (getQuotesFromDB) {
      //if have data on db then return that data
      const theQuote = `${getQuotesFromDB.content}\nAuthor: ${getQuotesFromDB.author} / Date: ${getQuotesFromDB.dateAdded}\nCategories: ${getQuotesFromDB.tags}`;
      message.reply(`${theQuote}\n This quote came from db`);
      return;
    } else {
      //if have data on db then call api and get the data
      const apiData = await getQuoteFromApi(message.content.toLowerCase());
      if (apiData) {
        //if have data on api then save to db and return
        await addNewQuoteToDB(apiData);

        const theQuote = `${apiData.content}\nAuthor: ${
          apiData.author
        } / Date: ${apiData.dateAdded}\nCategories: ${apiData.tags.join(", ")}`;
        message.reply(`${theQuote}`);
        return;
      } else {
        //if api return no data
        message.reply(`There is no quote related ${message.content} category`);
        return;
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.login(process.env.DISCORD_TOKEN);
console.log("Its online");
