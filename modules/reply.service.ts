import { IQuoteType } from "../types";

//generate reply
export const generateReply = (data: IQuoteType, source: string): string => {
  const theQuote = `${data.content}\nAuthor: ${data.author} | Date: ${data.dateAdded}\nCategories: ${data.tags}  | Source: ${source}`;
  return theQuote;
};
