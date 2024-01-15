import { useQuery } from "@tanstack/react-query";
import { getMarathon } from "../../services/apiMarathons";

export function useMarathonById(marathonId) {
  const {
    isLoading,
    data: marathon,
    error,
  } = useQuery({
    queryKey: ["marathons", marathonId],
    queryFn: () => getMarathon(marathonId),
    retry: false,
  });

  return { isLoading, error, marathon };
}
