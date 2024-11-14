import { createItem, fetchItems } from "@/services/item";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useItems = (collectionId: string) => {
  return useQuery({
    queryKey: ["items", collectionId],
    queryFn: () => fetchItems(collectionId),
  });
};

export const useCreateItem = () => {
  return useMutation({
    mutationFn: createItem,
  });
};