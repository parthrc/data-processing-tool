import styled from "styled-components";
import FileInput from "./FileInput.jsx";
import Button from "./Button.jsx";

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
  function handleUploadFile(e) {
    e.preventDefault();
    console.log("File uploaded");
  }

  return (
    <UploadContainer onSubmit={handleUploadFile}>
      <FileInput></FileInput>
      <Button variation="secondary" type="submit">
        Upload
      </Button>
    </UploadContainer>
  );
}

export default Upload;
