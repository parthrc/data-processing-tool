import styled from "styled-components";
import { useDeleteFileById } from "../features/Files/useDeleteFileById.jsx";
import { RiDeleteBin5Line } from "react-icons/ri";
import Spinner from "./Spinner.jsx";

const StyledIconContainer = styled.div`
  padding: 0.2rem;
  background-color: red;
  color: white;
  padding: 0.5rem;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;

  height: 3rem;
  width: 3rem;

  &:hover {
    cursor: pointer;
    transform: scale(1.25);
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
