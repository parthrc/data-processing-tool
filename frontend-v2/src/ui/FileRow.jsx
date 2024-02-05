import styled from "styled-components";
import Button from "./Button.jsx";

const FileRowItem = styled.li`
  background-color: var(--color-grey-200);
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function FileRow(file, key) {
  return (
    <FileRowItem key={key}>
      {file.file.file_name}
      <Button variation="secondary">Open</Button>
    </FileRowItem>
  );
}

export default FileRow;
