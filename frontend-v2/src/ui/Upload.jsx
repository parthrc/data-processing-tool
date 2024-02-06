import styled from "styled-components";
import FileInput from "./FileInput.jsx";
import Button from "./Button.jsx";
import { useForm, useFormState } from "react-hook-form";
import { uploadFile } from "../services/apiFiles.js";
import toast from "react-hot-toast";
import { useUploadFile } from "../features/Files/useUploadFile.jsx";
import { useCurrentUser } from "../features/Auth/useCurrentUser.jsx";

const UploadContainer = styled.form`
  background-color: salmon;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-inline: 1rem;
`;

const UploadInput = styled.input`
  text-align: center;
  background-color: chartreuse;
`;

function Upload() {
  const { isUploading, uploadFile } = useUploadFile();
  const { current_user_id } = useCurrentUser();

  function handleUploadFile(data) {
    if (data.upload[0] === undefined) {
      toast.error("Please choose a file before uploading");
      return null;
    }
    console.log("isuploading", isUploading);
    console.log("Current user inside handle submit", current_user_id);
    uploadFile({ file: data.upload[0], current_user_id: current_user_id });
  }

  const { register, handleSubmit, formState } = useForm({});

  return (
    <UploadContainer onSubmit={handleSubmit(handleUploadFile)}>
      <FileInput
        id="upload"
        {...register("upload")}
        disabled={isUploading}
      ></FileInput>
      <Button variation="secondary" type="submit">
        Upload
      </Button>
    </UploadContainer>
  );
}

export default Upload;
