export type Review = {
  id: string;
  product: { id: string };
  description: string;
  rate: number;
  creationDate: string;
  creatorUserId: string;
};
