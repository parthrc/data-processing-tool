import styled from "styled-components";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useUpdateCurrentFileId } from "../features/Files/useUpdateCurrentFileId.jsx";
import FileFormatIcon from "./FileFormatIcon.jsx";

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

function FileRow(file) {
  const { mutateUpdateCurrentFileId, isUpdatingCurrentFileId } =
    useUpdateCurrentFileId();

  //handle click
  function handleFileClick(file_id) {
    //Update current file ID
    mutateUpdateCurrentFileId(file_id);
  }
  console.log(file.file.file_format);
  return (
    <FileRowItem onClick={() => handleFileClick(file.file.id)}>
      <FileFormatIcon fileFormat={file.file.file_format}></FileFormatIcon>
      {file.file.file_name}
      <RiDeleteBin5Line />
    </FileRowItem>
  );
}

export default FileRow;
