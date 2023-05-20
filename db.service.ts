import { PrismaClient } from "@prisma/client";
import { IQuoteType } from "./types";
const prisma = new PrismaClient();

//find data on db
export const getDbData = async (
  params: string
): Promise<IQuoteType | undefined> => {
  const allQuotes = await prisma.quotes.findMany({
    where: {
      tags: {
        contains: `${params}`,
      },
    },
  });
  const randomQuote =
    allQuotes.length > 5
      ? allQuotes[Math.floor(Math.random() * allQuotes.length)]
      : undefined;
  return randomQuote;
};

//Add to db
export const addNewQuoteToDB = async (params: any) => {
  await prisma.quotes.create({
    data: {
      author: params.author.toLowerCase(),
      content: params.content.toLowerCase(),
      tags: params.tags.join(", ").toLowerCase(),
      dateAdded: params.dateAdded.toLowerCase(),
    },
  });
};
