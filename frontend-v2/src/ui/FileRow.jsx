import styled from "styled-components";
import Button from "./Button.jsx";
import { updateCurrentFile } from "../services/apiFiles.js";
import { QueryClient } from "@tanstack/react-query";

const FileRowItem = styled.li`
  background-color: var(--color-grey-200);
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const queryClient = new QueryClient();

function FileRow(file) {
  //handle click
  function handleFileClick(file_id) {
    //Update current file ID
    updateCurrentFile(file.file.id);
    queryClient.invalidateQueries({ queryKey: ["userFiles"] });
  }

  return (
    <FileRowItem>
      {file.file.file_name}

      <Button
        variation="secondary"
        onClick={() => handleFileClick(file.file.id)}
      >
        Open
      </Button>
    </FileRowItem>
  );
}

export default FileRow;
