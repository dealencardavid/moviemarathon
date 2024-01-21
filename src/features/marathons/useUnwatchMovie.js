import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMarathonMovies } from "../../services/apiMarathons";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useMarathon } from "./useMarathon";

export function useUnwatchMovie() {
  const queryClient = useQueryClient();
  const { marathonId: defaultMarathonId } = useParams();
  const { marathon } = useMarathon();

  const { mutate: unwatchMovie, isLoading } = useMutation({
    mutationFn: ({ updateMovieId, marathonId = defaultMarathonId }) => {
      const updatedMovies = marathon.movies.map((movie) =>
        movie.id === updateMovieId
          ? { ...movie, watched: false, score1: 0, score2: 0 }
          : movie
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

  return { unwatchMovie, isLoading };
}
