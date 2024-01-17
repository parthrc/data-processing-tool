import styled from "styled-components";
import { useFiles } from "./useFiles.jsx";
import Spinner from "../../ui/Spinner.jsx";

const ListUl = styled.ul`
  list-style-type: none;
`;

function FilesList() {
  const { isLoading, files, error } = useFiles();
  if (isLoading) return <Spinner />;
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
