import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMarathon } from "../../services/apiMarathons";
import toast from "react-hot-toast";

export function useCreateMarathon() {
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: createMarathon,
    onSuccess: () => {
      toast.success("New marathon created");
      queryClient.invalidateQueries({ queryKey: ["marathons"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isLoading };
}
