import { Item } from "./item";

export type Collection = {
  id: string;
  name: string;
  type: string;
  description: string | null;
  photoUrl: string | null;
  items: Item[];
};

export type CollectionInput = Omit<Collection, 'id' | 'items'>;
