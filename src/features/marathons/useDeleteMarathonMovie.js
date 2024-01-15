import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMarathonMovies } from "../../services/apiMarathons";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useMarathon } from "./useMarathon";

export function useDeleteMarathonMovie() {
  const queryClient = useQueryClient();
  const { marathonId } = useParams();
  const { marathon } = useMarathon();

  const { mutate: deleteMovie, isLoading: isDeleting } = useMutation({
    mutationFn: (deletedMovie) => {
      const updatedMovies = marathon.movies.filter(
        (movie) => movie.id !== deletedMovie.id
      );
      updateMarathonMovies(marathonId, updatedMovies);
    },

    onSuccess: () => {
      toast.success(`Movie successfully deleted`);

      queryClient.invalidateQueries({
        queryKey: ["marathons"],
      });
    },

    onError: () => toast.error("There was an error while deleting your movie"),
  });

  return { deleteMovie, isDeleting };
}
