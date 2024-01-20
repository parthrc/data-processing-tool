import { useQuery } from "@tanstack/react-query";
import { getCurrentUser as getCurrentUserApi } from "../../services/apiUsers.js";

export function useCurrentUser() {
  const { isLoading: isFetchingCurrentUser, data: currentActiveUser } =
    useQuery({
      queryKey: ["currentUser"],
      queryFn: getCurrentUserApi,
    });
  console.log("Custom hook curretnUser:", currentActiveUser);
  console.log("Custom hook curretnUser:", currentActiveUser?.user?.role);
  return {
    isFetchingCurrentUser,
    currentActiveUser,
    isAuthenticated: currentActiveUser?.user?.role === "authenticated",
  };
}
