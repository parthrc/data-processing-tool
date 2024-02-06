import { useQuery } from "@tanstack/react-query";
import { getCurrentUser as getCurrentUserApi } from "../../services/apiUsers.js";

export function useCurrentUser() {
  const { isLoading: isFetchingCurrentUser, data: currentActiveUser } =
    useQuery({
      queryKey: ["currentUser"],
      queryFn: getCurrentUserApi,
    });

  return {
    isFetchingCurrentUser,
    currentActiveUser,
    isAuthenticated:
      currentActiveUser?.user?.role ||
      currentActiveUser?.role === "authenticated",
    current_user_id: currentActiveUser?.user?.id || currentActiveUser?.id,
  };
}
