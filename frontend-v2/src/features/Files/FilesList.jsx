import styled from "styled-components";
import Spinner from "../../ui/Spinner.jsx";
import { useFilesOfUser } from "./useFilesOfUser.jsx";
import FileRow from "../../ui/FileRow.jsx";
import Header from "../../ui/Header.jsx";

const FilesListContainer = styled.div`
  padding: 1rem;
  background-color: white;
  overflow: auto;
  height: 80vh;
`;

const ListUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column-reverse;
`;

function FilesList() {
  const { isLoading, data: allFiles, error } = useFilesOfUser();
  if (isLoading) return <Spinner />;

  return (
    <FilesListContainer>
      <Header bgcolor="secondary" size="small">
        Your files:
      </Header>
      {allFiles ? (
        <ListUl>
          {allFiles.files.map(function (f) {
            return <FileRow key={f.id} file={f}></FileRow>;
          })}
        </ListUl>
      ) : (
        <p>No files</p>
      )}
    </FilesListContainer>
  );
}

export default FilesList;
