import axios from "axios";
import { IAPIQuoteType } from "./types";

export const getQuoteFromApi = async (
  params: string
): Promise<IAPIQuoteType | undefined> => {
  const getQuote = await axios.get(
    `https://api.quotable.io/quotes/random?tags=${params}`
  );
  return getQuote.data[0];
};
