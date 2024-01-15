import { useQuery } from "@tanstack/react-query";
import { getMarathons } from "../../services/apiMarathons";

export function useMarathons() {
  // Querying
  const {
    isLoading,
    data: marathons,
    error,
  } = useQuery({
    queryKey: ["marathons"],
    queryFn: getMarathons,
  });

  return { isLoading, marathons, error };
}
