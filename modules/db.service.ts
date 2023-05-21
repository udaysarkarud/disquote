import { PrismaClient } from "@prisma/client";
import { IQuoteType } from "../types";
const prisma = new PrismaClient();

//find data on db and return that if found
export const getDbData = async (
  params: string
): Promise<IQuoteType | undefined> => {
  //get all quotes related user category
  const allQuotes = await prisma.quotes.findMany({
    where: {
      tags: {
        contains: `${params}`,
      },
    },
  });
  //randomly select one quote if there is more data than 5 otherwise return undefined
  const randomQuote =
    allQuotes.length > 5
      ? allQuotes[Math.floor(Math.random() * allQuotes.length)]
      : undefined;
  return randomQuote;
};

//Add to db
export const addNewQuoteToDB = async (params: IQuoteType): Promise<void> => {
  await prisma.quotes.create({
    data: {
      author: params.author,
      content: params.content,
      tags: params.tags,
      dateAdded: params.dateAdded,
    },
  });
};
