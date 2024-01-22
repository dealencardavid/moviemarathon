import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMarathonMovies } from "../../services/apiMarathons";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export function useAddMarathonMovie() {
  const queryClient = useQueryClient();
  const { marathonId } = useParams();

  const { mutate: addMovie, isLoading } = useMutation({
    mutationFn: (updatedMoviesArr) => {
      updateMarathonMovies(marathonId, updatedMoviesArr);
    },

    onSuccess: () => {
      toast.success(`Marathon successfully updated`);

      queryClient.invalidateQueries({
        queryKey: ["marathons"],
      });
    },

    onError: () => toast.error("There was an error while updating"),
  });

  return { addMovie, isLoading };
}
