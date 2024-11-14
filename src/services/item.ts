import { Item, ItemCreate } from "@/types/item";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export const fetchItems = async (collectionId: string) => {
  const response = await axios.get(`/item?collectionId=${collectionId}`);
  return response.data as Item[];
};

export const createItem = async (item: ItemCreate) => {
  const response = await axios.post(`/item`, item);
  return response.data as Item;
};