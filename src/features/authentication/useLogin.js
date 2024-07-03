import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Login as LoginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => LoginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueriesData(["user"], user);
      navigate("/dashboard");
      toast.success("Welcome in Your Account");
    },
    onError: () => {
      toast.error("password or the emil not correct");
    },
  });
  return { login, isLoading };
}

export default useLogin;
