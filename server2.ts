import Bard from "bard-api";

const bard = new Bard();
const response = bard.query("What is the capital of France?");
console.log(response);

// import express from "express";
// import * as dotenv from "dotenv";
// import { Client, GatewayIntentBits } from "discord.js";
// import { Configuration, OpenAIApi } from "openai";
// import axios from "axios";

// dotenv.config();
// const app = express();
// const port = 8000;

// //openai
// const configuration = new Configuration({
//   organization: process.env.OPENAI_ORG,
//   apiKey: process.env.OPENAI_KEY,
// });
// const openai = new OpenAIApi(configuration);
// async function runCompletion() {
//   const completion = await openai.createCompletion({
//     model: "davinci",
//     prompt: "How are you today?",
//   });
//   console.log(completion.data.choices[0].text);
// }
// app.get("/", (req, res) => {
//   runCompletion();
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
