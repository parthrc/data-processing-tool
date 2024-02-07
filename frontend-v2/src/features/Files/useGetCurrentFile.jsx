import { useQuery } from "@tanstack/react-query";
import { getCurrentFile as getCurrentFileApi } from "../../services/apiFiles.js";

export function useGetCurrentFileId() {
  const { isLoading: isGettingCurentFileId, data: currentFileId } = useQuery({
    queryKey: ["getCurrentFile"],
    queryFn: getCurrentFileApi,
  });

  return { isGettingCurentFileId, currentFileId };
}
