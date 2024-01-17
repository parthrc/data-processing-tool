import styled from "styled-components";
import { useFiles } from "./useFiles.jsx";

const ListUl = styled.ul`
  list-style-type: none;
  color: black;
`;

function FilesList() {
  const { isLoading, files, error } = useFiles();

  console.log(files);

  return (
    <div>
      Fileslist
      {
        <ul>
          {files.files.map((f) => (
            <li key={f.id}>{f.filename}</li>
          ))}
        </ul>
      }
    </div>
  );
}

export default FilesList;
