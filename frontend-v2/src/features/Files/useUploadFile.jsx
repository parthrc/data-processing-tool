import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadFile as uploadFileApi } from "../../services/apiFiles.js";
import toast from "react-hot-toast";

export function useUploadFile() {
  //Access the query client to invalidate queries
  const queryClient = useQueryClient();

  const { isLoading: isUploading, mutate: uploadFile } = useMutation({
    mutationFn: ({ file, current_user_id }) =>
      uploadFileApi(file, current_user_id),
    onSuccess: () => {
      toast.success("File uploaded successfully");
      //We invalidate the 'userFiles' query, which forces a update
      queryClient.invalidateQueries({ queryKey: ["userFiles"] });
    },
    onError: () => {
      toast.error("Error uploading file");
    },
  });

  return { isUploading, uploadFile };
}
