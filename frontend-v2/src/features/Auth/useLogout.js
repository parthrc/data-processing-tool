import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logoutUser as logoutUserApi } from "../../services/apiUsers.js";
import toast from "react-hot-toast";
import { resetCurrentFileInLocalStorage } from "../../utils/localStorageUtils.js";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    isLoading: isLoggingOut,
    mutate: logout,
    error,
  } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logoutUserApi,
    onSuccess: () => {
      toast.success("Logout successfull");
      queryClient.removeQueries();
      resetCurrentFileInLocalStorage();
      navigate("/login", { replace: true });
    },
  });

  return { isLoggingOut, logout };
}
