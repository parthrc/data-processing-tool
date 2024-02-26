import styled from "styled-components";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useUpdateCurrentFileId } from "../features/Files/useUpdateCurrentFileId.jsx";
import FileFormatIcon from "./FileFormatIcon.jsx";

const FileRowItem = styled.li`
  background-color: var(--color-grey-200);
  padding: 0.5rem;

  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

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

  &:hover {
    cursor: pointer;
    transform: scale(1.25);
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
    <FileRowItem onClick={() => handleFileClick(file.file.id)}>
      <FileFormatIcon fileformat={file.file.file_format}></FileFormatIcon>
      <StyledFileName>{file.file.file_name}</StyledFileName>
      <StyledIconContainer>
        <RiDeleteBin5Line />
      </StyledIconContainer>
    </FileRowItem>
  );
}

export default FileRow;
