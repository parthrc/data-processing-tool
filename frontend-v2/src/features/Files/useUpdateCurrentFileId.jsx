import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getFileById,
  updateCurrentFile as updateCurrentFileApi,
} from "../../services/apiFiles.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  addCurrentFileToLocalStorage,
 
} from "../../utils/localStorageUtils.js";


export function useUpdateCurrentFileId() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: mutateUpdateCurrentFileId,
    isLoading: isUpdatingCurrentFileId,
    error,
  } = useMutation({
    mutationFn: (file_id) => updateCurrentFileApi(file_id),
    onSuccess: async (data) => {
      toast.success("Opening selected file");
      queryClient.invalidateQueries({ queryKey: ["getFileById"] });

      // Set current file info in localstorage
      const curr = await getFileById(data?.file_id);
      addCurrentFileToLocalStorage(curr);

      //Remove current file log
     

      navigate("/process");
    },
    onError: () => {
      toast.error("Problem opening this file.");
    },
  });

  return { isUpdatingCurrentFileId, mutateUpdateCurrentFileId };
}
