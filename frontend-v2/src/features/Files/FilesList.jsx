import styled from "styled-components";
import { useFiles } from "./useFiles.jsx";
import Spinner from "../../ui/Spinner.jsx";
import { useFilesOfUser } from "./useFilesOfUser.jsx";

const ListUl = styled.ul`
  list-style-type: none;
`;

function FilesList() {
  const { isLoading, data: allFiles, error } = useFilesOfUser();
  if (isLoading) return <Spinner />;
  console.log("All files", allFiles);

  return (
    <div>
      Fileslist
      {allFiles ? (
        <ul>
          {allFiles.files.map((f) => (
            <li key={f.id}>{f.file_name}</li>
          ))}
        </ul>
      ) : (
        <p>No files</p>
      )}
      {}
    </div>
  );
}

export default FilesList;
