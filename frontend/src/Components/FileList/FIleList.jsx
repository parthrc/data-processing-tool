import { useState } from "react";
import styles from "./FIleList.module.css";
import { useEffect } from "react";
import { useFiles } from "../../Context/FileContext";
import { useNavigate } from "react-router-dom";

function FIleList() {
  const { fetchAllFiles, setCurrentFile, setCurrentFilename } = useFiles();

  const [allFiles, setAllFiles] = useState([]);

  const navigate = useNavigate();

  useEffect(function () {
    async function getFiles() {
      const arr = await fetchAllFiles();
      setAllFiles(arr);
    }
    getFiles();
  }, []);

  //handle process
  function handleProcess(file_id, filename) {
    setCurrentFile(file_id);
    setCurrentFilename(filename);
    console.log("File id set:", file_id);
    navigate("/process");
  }

  return (
    <div className={styles.container}>
      <h1>Files uploaded by you:</h1>
      <div>
        <ul>
          {allFiles.map((f) => (
            <div key={f.id} className={styles.itemC}>
              <li key={f.id}>{f.Filename}</li>
              <button onClick={(e) => handleProcess(f.id, f.Filename)}>
                Process
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FIleList;
