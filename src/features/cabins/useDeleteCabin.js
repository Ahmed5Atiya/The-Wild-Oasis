import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabins as deleteCabinApi } from "../../services/apiCabins";

function useDeleteCabin() {
  const QueryClient = useQueryClient();
  const { isLoading: isDeleteing, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),
    onSuccess: () => {
      toast.success("Cabin Deleted Successfulley");
      QueryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return { isDeleteing, deleteCabin };
}

export default useDeleteCabin;
