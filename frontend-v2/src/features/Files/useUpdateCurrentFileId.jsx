import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { updateCurrentFile as updateCurrentFileApi } from "../../services/apiFiles.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// export function useUpdateCurrentFileId(file_id) {
//   const { data: updatedCurrentFileId, isLoading: isUpdatingCurrentFileId } =
//     useQuery({
//       queryKey: ["updateCUrrentFileId", file_id],
//       queryFn: () => updateCurrentFileApi(file_id),
//     });

export function useUpdateCurrentFileId() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: mutateUpdateCurrentFileId,
    isLoading: isUpdatingCurrentFileId,
    error,
  } = useMutation({
    mutationFn: (file_id) => updateCurrentFileApi(file_id),
    onSuccess: () => {
      toast.success("Opening selected file");
      queryClient.invalidateQueries({ queryKey: ["getFileById"] });
      navigate("/process");
    },
    onError: () => {
      toast.error("Problem opening this file.");
    },
  });

  return { isUpdatingCurrentFileId, mutateUpdateCurrentFileId };
}
