import { useMutation, useQuery } from "@tanstack/react-query";
import { uploadFile as uploadFileApi } from "../../services/apiFiles.js";
import toast from "react-hot-toast";
import { useCurrentUser } from "../Auth/useCurrentUser.jsx";

export function useUploadFile() {
  const { isLoading: isUploading, mutate: uploadFile } = useMutation({
    mutationFn: ({ file, current_user_id }) =>
      uploadFileApi(file, current_user_id),
    onSuccess: () => {
      toast.success("File uploaded successfully");
    },
    onError: () => {
      toast.error("Error uploading file");
    },
  });

  return { isUploading, uploadFile };
}
