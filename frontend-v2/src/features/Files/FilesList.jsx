import styled from "styled-components";
import Spinner from "../../ui/Spinner.jsx";
import { useFilesOfUser } from "./useFilesOfUser.jsx";
import FileRow from "../../ui/FileRow.jsx";
import Header from "../../ui/Header.jsx";
import Divider from "../../ui/Divider.jsx";

export const FilesListContainer = styled.div`
  padding: 1rem;
  background-color: white;
  overflow: auto;

  border-radius: 1%;
`;

const ListUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column-reverse;
`;

const StyledNoFiles = styled.p`
  color: black;
  font-size: 2rem;
  text-align: center;
`;

function FilesList() {
  const { isLoading, data: allFiles, error } = useFilesOfUser();
  if (isLoading) return <Spinner />;

  if (isLoading === false) {
    return (
      <FilesListContainer>
        <Header bgcolor="secondary" size="small">
          Your files:
        </Header>
        <Divider mtop="1rem"></Divider>

        {allFiles ? (
          <ListUl>
            {allFiles.files.map(function (f) {
              return <FileRow key={f.id} file={f}></FileRow>;
            })}
          </ListUl>
        ) : (
          <StyledNoFiles>No files uploaded yet.</StyledNoFiles>
        )}
      </FilesListContainer>
    );
  }
}

export default FilesList;
