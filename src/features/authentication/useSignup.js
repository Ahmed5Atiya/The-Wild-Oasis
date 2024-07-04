import { useMutation } from "@tanstack/react-query";
import { Signup as SignupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: SignupApi,
    onSuccess: (user) => {
      toast.success("You Signup Scussfualy");
    },
    // onError: () => {
    //   toast.error("You Signup have the problem ");
    // },
  });
  return { signup, isLoading };
}

export default useSignup;
