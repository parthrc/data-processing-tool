import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser as loginUserApi } from "../../services/apiUsers.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLoginUser() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { mutate: loginUser, isLoading: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => loginUserApi({ email, password }),
    onSuccess: (user) => {
      toast.success("User login success");
      queryClient.setQueryData(["currentUser"], user.user);
      navigate("/dashboard", { replace: true });
    },
    onError: () => {
      toast.error("Error logging in");
    },
  });

  return { loginUser, isLoggingIn };
}
