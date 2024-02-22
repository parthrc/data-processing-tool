import styled from "styled-components";
import FileInput from "./FileInput.jsx";
import Button from "./Button.jsx";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useUploadFile } from "../features/Files/useUploadFile.jsx";
import { useCurrentUser } from "../features/Auth/useCurrentUser.jsx";

import Header from "./Header.jsx";

const UploadMainContainer = styled.div`
  padding: 1rem;
  background-color: white;
`;

const UploadContainer = styled.form`
  background-color: var(--color-grey-200);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-inline: 1rem;
  padding-block: 3rem;
  max-height: 20rem;
`;

const UploadButton = styled.button`
  background-color: var(--color-green-700);
  border: none;
  padding: 0%.5rem;
  color: white;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

function Upload() {
  const { register, handleSubmit, formState, reset } = useForm({});
  const { isUploading, uploadFile } = useUploadFile();
  const { current_user_id } = useCurrentUser();

  async function handleUploadFile(data, e) {
    if (data.upload[0] === undefined) {
      toast.error("Please choose a file before uploading");
      return null;
    }
    //Mutation call
    uploadFile({
      file: data.upload[0],
      current_user_id: current_user_id,
    });

    reset();
  }

  return (
    <UploadMainContainer>
      <Header size="small" bgcolor="secondary">
        Upload
      </Header>
      <UploadContainer onSubmit={handleSubmit(handleUploadFile)}>
        <FileInput
          id="upload"
          {...register("upload")}
          disabled={isUploading}
        ></FileInput>

        <UploadButton type="submit">Upload</UploadButton>
      </UploadContainer>
    </UploadMainContainer>
  );
}

export default Upload;
