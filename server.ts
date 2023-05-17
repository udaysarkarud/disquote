import express from "express";
import * as dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
dotenv.config();
const app = express();
const port = 8000;

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
    console.log(message.content);
    message.reply(`You said: ${message.content}`);
  } catch (err) {}
});

client.login(process.env.DISCORD_TOKEN);
console.log("Its online");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
