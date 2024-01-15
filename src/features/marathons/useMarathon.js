import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMarathon } from "../../services/apiMarathons";

export function useMarathon() {
  const { marathonId } = useParams();

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
