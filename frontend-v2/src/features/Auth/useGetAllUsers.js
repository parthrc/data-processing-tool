import { useQuery } from "@tanstack/react-query";
import { getAllUsers as getAllUsersApi } from "../../services/apiUsers.js";

export function useGetAllUsers() {
  const {
    data: allUsers,
    isLoading: isGettingALlUsers,
    error,
  } = useQuery({
    queryKey: ["getAllUsers"],
    queryFn: getAllUsersApi,
  });

  if (error) {
    console.log("Error getting all users");
  }
  console.log(allUsers);

  return { allUsers, isGettingALlUsers, error };
}
