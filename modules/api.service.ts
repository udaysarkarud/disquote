import axios from "axios";
import { GetUsersResponse, IQuoteType } from "../types";
// call api related user category
export const getQuoteFromApi = async (
  params: string
): Promise<IQuoteType | undefined> => {
  const getQuote: GetUsersResponse = await axios.get(
    `https://api.quotable.io/quotes/random?tags=${params}`
  );

  if (getQuote.data.length > 0) {
    const RefineData: IQuoteType = {
      author: getQuote.data[0].author.toLowerCase(),
      content: getQuote.data[0].content.toLowerCase(),
      tags: getQuote.data[0].tags.join(", ").toLowerCase(),
      dateAdded: getQuote.data[0].dateAdded.toLowerCase(),
    };
    return RefineData;
  } else {
    return undefined;
  }
};
