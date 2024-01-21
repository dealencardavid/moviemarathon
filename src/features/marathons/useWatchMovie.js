import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMarathonMovies } from "../../services/apiMarathons";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useMarathon } from "./useMarathon";

export function useWatchMovie() {
  const queryClient = useQueryClient();
  const { marathonId: defaultMarathonId } = useParams();
  const { marathon } = useMarathon();

  const { mutate: watchMovie, isLoading } = useMutation({
    mutationFn: ({ updateMovieId, marathonId = defaultMarathonId }) => {
      const updatedMovies = marathon.movies.map((movie) =>
        movie.id === updateMovieId ? { ...movie, watched: true } : movie
      );

      updateMarathonMovies(marathonId, updatedMovies);
    },

    onSuccess: () => {
      toast.success(`Movie successfully updated`);

      queryClient.invalidateQueries({
        queryKey: ["marathons"],
      });
    },

    onError: () => toast.error("There was an error while updating"),
  });

  return { watchMovie, isLoading };
}
