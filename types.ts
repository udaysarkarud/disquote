export interface IQuoteType {
  id?: number;
  author: string;
  content: string;
  tags: string;
  dateAdded: string;
}

export interface IAPIQuoteType {
  _id: string;
  author: string;
  content: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}
