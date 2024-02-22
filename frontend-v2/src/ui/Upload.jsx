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
`;

const UploadContainer = styled.form`
  background-color: var(--color-brand-orange-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-inline: 1rem;
  padding-block: 3rem;
  max-height: 20rem;
`;

const UploadInput = styled.input`
  text-align: center;
  background-color: chartreuse;
`;

function Upload() {
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
  }

  const { register, handleSubmit, formState } = useForm({});

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
        <Button variation="secondary" type="submit">
          Upload
        </Button>
      </UploadContainer>
    </UploadMainContainer>
  );
}

export default Upload;
