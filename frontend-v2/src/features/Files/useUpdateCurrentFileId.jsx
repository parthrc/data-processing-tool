import { useQuery } from "@tanstack/react-query";
import { updateCurrentFile as updateCurrentFileApi } from "../../services/apiFiles.js";

export function useUpdateCurrentFileId(file_id) {
  const { data: updatedCurrentFileId, isLoading: isUpdatingCurrentFileId } =
    useQuery({
      queryKey: ["updateCUrrentFileId", file_id],
      queryFn: () => updateCurrentFileApi(file_id),
    });

  return { isUpdatingCurrentFileId, updatedCurrentFileId };
}
