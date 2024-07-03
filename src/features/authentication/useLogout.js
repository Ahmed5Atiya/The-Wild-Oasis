import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Logout } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: Sigout, isLoading } = useMutation({
    mutationFn: Logout,
    onSuccess: () => {
      queryClient.removeQueries();
      toast.success("You Are Logout Now");
      navigate("/login", { replace: true });
    },
  });
  return { isLoading, Sigout };
}

export default useLogout;
