import * as dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
import { addNewQuoteToDB, getDbData } from "./modules/db.service";
import { getQuoteFromApi } from "./modules/api.service";
import { generateReply } from "./modules/reply.service";
dotenv.config();

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

    //request from User
    const requestFromUser = message.content.toLowerCase();

    //get quote from db
    const getQuotesFromDB = await getDbData(requestFromUser);

    if (getQuotesFromDB) {
      //if have quote on db
      message.reply(generateReply(getQuotesFromDB, "Database"));
      return;
    } else {
      //if there have no quote on db than call api and get the quote
      const getQuotesFromApi = await getQuoteFromApi(requestFromUser);

      if (getQuotesFromApi) {
        //if have quote on api then save to db and return that quote on reply

        await addNewQuoteToDB(getQuotesFromApi);
        message.reply(generateReply(getQuotesFromApi, "Api"));
        return;
      } else {
        //if there is no quote on the api

        message.reply(
          `There is no quote related to ${requestFromUser} category on api and database.`
        );
        return;
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.login(process.env.DISCORD_TOKEN);
console.log("Its online");
