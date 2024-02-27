import styled from "styled-components";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useUpdateCurrentFileId } from "../features/Files/useUpdateCurrentFileId.jsx";
import FileFormatIcon from "./FileFormatIcon.jsx";
import { useDeleteFileById } from "../features/Files/useDeleteFileById.jsx";
import FileRowDeleteButton from "./FileRowDeleteButton.jsx";
const FileRowContainer = styled.div`
  display: grid;
  grid-template-columns: 9fr 1fr;
`;

const FileRowItem = styled.li`
  background-color: var(--color-grey-200);
  padding: 0.5rem;

  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;

  &:hover {
    cursor: pointer;
    background-color: var(--color-grey-300);
  }
`;

const StyledFileName = styled.span`
  font-size: 1.3rem;
`;

const StyledIconContainer = styled.div`
  padding: 0.2rem;
  color: red;
  background-color: var(--color-grey-200);
  padding: 0.5rem;

  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;

  &:hover {
    cursor: pointer;
    transform: scale(1.25);
    background-color: red;
    color: white;
  }
`;

function FileRow(file) {
  const { mutateUpdateCurrentFileId, isUpdatingCurrentFileId } =
    useUpdateCurrentFileId();

  //handle click
  function handleFileClick(file_id) {
    //Update current file ID
    mutateUpdateCurrentFileId(file_id);
  }

  return (
    <FileRowContainer>
      <FileRowItem onClick={() => handleFileClick(file.file.id)}>
        <FileFormatIcon fileformat={file.file.file_format}></FileFormatIcon>
        <StyledFileName>{file.file.file_name}</StyledFileName>
      </FileRowItem>
      <FileRowDeleteButton file={file}></FileRowDeleteButton>
    </FileRowContainer>
  );
}

//onCLick={() => handleDeleteClick(file.file.id)}

export default FileRow;
