import { Collection, CollectionInput } from "@/types/collection";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export const fetchCollection = async (type: string) => {
  const response = await axios.get(`/collection?type=${type}`);
  return response.data as Collection[];
};

export const fetchCollectionById = async (id: string) => {
  const response = await axios.get(`/collection/${id}`);
  return response.data as Collection;
};

export const createCollection = async (collection: CollectionInput) => {
  const response = await axios.post("/collection", collection);
  return response.data as Collection;
};