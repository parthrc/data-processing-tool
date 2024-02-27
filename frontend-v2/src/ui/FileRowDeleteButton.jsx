import styled from "styled-components";
import { useDeleteFileById } from "../features/Files/useDeleteFileById.jsx";
import { RiDeleteBin5Line } from "react-icons/ri";
import Spinner from "./Spinner.jsx";

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

function FileRowDeleteButton(file) {
  const { mutateDeleteFile, isDeleting } = useDeleteFileById();

  //handle delete button
  function handleDeleteClick() {
    mutateDeleteFile(file.file.file.id);
  }

  if (isDeleting) {
    return <Spinner></Spinner>;
  }
  return (
    <StyledIconContainer onClick={() => handleDeleteClick(file.file.id)}>
      <RiDeleteBin5Line />
    </StyledIconContainer>
  );
}

export default FileRowDeleteButton;
