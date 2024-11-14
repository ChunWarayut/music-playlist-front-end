import { createCollection, fetchCollection, fetchCollectionById } from "@/services/collection";
import { CollectionInput } from "@/types/collection";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCollection = (type: string) => {
  return useQuery({
    queryKey: ["collection", type],
    queryFn: () => fetchCollection(type),
  });
};

export const useCollectionById = (id: string) => {
  return useQuery({
    queryKey: ["collection", id],
    queryFn: () => fetchCollectionById(id),
  });
};

export const useCreateCollection = () => {
  return useMutation({
    mutationFn: (collection: CollectionInput) => createCollection(collection),
  });
};