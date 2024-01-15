import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMarathon as deleteMarathonApi } from "../../services/apiMarathons";
import toast from "react-hot-toast";

export function useDeleteMarathon() {
  const queryClient = useQueryClient();

  // Mutating (deleting) a marathon
  const { isLoading: isDeleting, mutate: deleteMarathon } = useMutation({
    mutationFn: (id) => deleteMarathonApi(id),
    onSuccess: () => {
      toast.success("Marathon successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["marathons"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteMarathon };
}
