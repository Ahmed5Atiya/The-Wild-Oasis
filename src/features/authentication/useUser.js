import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    // onSuccess: () => {
    //   toast.success("Welcome in Your Account");
    // },
    // onError: () => {
    //   toast.error("password or the emil not correct");
    // },
  });
  return { user, isLoading, isAuthenticated: user?.role === "authenticated" };
}
