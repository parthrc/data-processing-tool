import { useState } from "react";
import styles from "./FIleList.module.css";
import { useEffect } from "react";
import { useFiles } from "../../Context/FileContext";
import { useNavigate } from "react-router-dom";

function FIleList() {
  const { fetchAllFiles, setCurrentFile } = useFiles();

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
  function handleProcess(file_id) {
    setCurrentFile(file_id);
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
              <button onClick={(e) => handleProcess(f.id)}>Process</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FIleList;
