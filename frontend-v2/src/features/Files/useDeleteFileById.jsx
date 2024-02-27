import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFileById } from "../../services/apiFiles.js";
import toast from "react-hot-toast";

export function useDeleteFileById() {
  //Access the query client to invalidate queries
  const queryClient = useQueryClient();
  const {
    mutate: mutateDeleteFile,
    error,
    isLoading: isDeleting,
  } = useMutation({
    mutationFn: (file_id) => deleteFileById(file_id),
    onSuccess: async () => {
      toast.success("File deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["userFiles"] });
    },
    onError: () => {
        toast.error("Cannot delete current file");
    },
  });

  return { mutateDeleteFile, isDeleting };
}
