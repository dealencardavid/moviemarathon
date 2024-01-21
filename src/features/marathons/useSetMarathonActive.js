import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setActiveMarathon } from "../../services/apiMarathons";

export function useSetMarathonActive() {
  const queryClient = useQueryClient();

  const { mutate: setActive, isLoading: isSettingActive } = useMutation({
    mutationFn: (id) => setActiveMarathon(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["marathons"],
      });
    },
  });

  return { setActive, isSettingActive };
}
