import { useQuery } from "@tanstack/react-query";
import { getFilesWithUserId } from "../../services/apiFiles.js";
import { useCurrentUser } from "../Auth/useCurrentUser.jsx";

export function useFilesOfUser() {
  //Getting current user
  const { current_user_id } = useCurrentUser();

  const { isLoading, data, error } = useQuery({
    queryKey: ["userFiles", current_user_id],
    queryFn: () => getFilesWithUserId(current_user_id),
  });

  return { isLoading, data, error };
}
