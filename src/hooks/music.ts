import { getMusics } from "@/services/music";
import { useQuery } from "@tanstack/react-query";

export const useMusics = () => {
  return useQuery({
    queryKey: ["musics"],
    queryFn: () => getMusics(),
  });
};
