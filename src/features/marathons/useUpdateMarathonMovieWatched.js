import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMarathonMovies } from "../../services/apiMarathons";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useMarathon } from "./useMarathon";

export function useUpdateMarathonMovieWatched() {
  const queryClient = useQueryClient();
  const { marathonId } = useParams();
  const { marathon } = useMarathon();

  const { mutate: update, isLoading } = useMutation({
    mutationFn: (updateMovie) => {
      const updatedMovies = marathon.movies.map((movie) =>
        movie.id === updateMovie.id
          ? { ...movie, watched: !movie.watched }
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

  return { update, isLoading };
}
