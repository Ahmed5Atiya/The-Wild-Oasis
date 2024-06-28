import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useCreateCabin() {
  const QueryClient = useQueryClient();
  const { isLoading: isCreated, mutate: createCabin } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("Cabin Added Successfulley");
      QueryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return { isCreated, createCabin };
}

export default useCreateCabin;
