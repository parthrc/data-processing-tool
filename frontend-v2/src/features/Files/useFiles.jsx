import { useQuery } from "@tanstack/react-query";
import { getAllFiles } from "../../services/apiFiles.js";

export function useFiles() {
  const {
    isLoading,
    data: files,
    error,
  } = useQuery({
    queryKey: ["files"],
    queryFn: getAllFiles,
  });

  return { isLoading, files, error };
}
