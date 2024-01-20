import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { registerUser as registerUserApi } from "../../services/apiUsers.js";

//custom hook for react-query to register user
export function useRegisterUser() {
  const { mutate: registerUser, isLoading: isRegistering } = useMutation({
    mutationFn: registerUserApi,
    onSuccess: () => {
      toast.success("User registered successfully.");
    },
    onError: () => {
      toast.error("Problem registering new user.");
    },
  });

  return { isRegistering, registerUser };
}
