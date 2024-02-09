import styled from "styled-components";
import Button from "./Button.jsx";
import { updateCurrentFile } from "../services/apiFiles.js";
import { QueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useUpdateCurrentFileId } from "../features/Files/useUpdateCurrentFileId.jsx";

const FileRowItem = styled.li`
  background-color: var(--color-grey-200);
  padding-inline: 0.5rem;

  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
    border: 1px solid var(--color-brand-orange);
  }
`;

const queryClient = new QueryClient();

function FileRow(file) {
  const { mutateUpdateCurrentFileId, isUpdatingCurrentFileId } =
    useUpdateCurrentFileId();



  //handle click
  function handleFileClick(file_id) {
    //Update current file ID
    mutateUpdateCurrentFileId(file_id);
   
  }

  return (
    <FileRowItem onClick={() => handleFileClick(file.file.id)}>
      {file.file.file_name}

      <Button variation="secondary">Open</Button>
    </FileRowItem>
  );
}

export default FileRow;
