import { useQuery } from "@tanstack/react-query";
import { getFileById as getFileByIdApi } from "../../services/apiFiles.js";
import { useGetCurrentFileId } from "./useGetCurrentFile.jsx";

export function useGetFileById() {
  const { currentFileId } = useGetCurrentFileId();
  const {
    isLoading: isGettingFileById,
    data: file,
    error,
  } = useQuery({
    queryKey: ["getFileById", currentFileId],
    queryFn: () => getFileByIdApi(currentFileId),
  });

  return { isGettingFileById, file, error };
}
