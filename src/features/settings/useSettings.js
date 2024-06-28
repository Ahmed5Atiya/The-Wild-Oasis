import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

function useSettings() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isLoading, error, data };
}

export default useSettings;
