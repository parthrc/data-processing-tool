import { useState } from "react";
import styles from "./FIleList.module.css";
import { useEffect } from "react";
import { useFiles } from "../../Context/FileContext";

function FIleList() {
  const { fetchAllFiles } = useFiles();

  const [allFiles, setAllFiles] = useState([]);

  useEffect(
    function () {
      async function getFiles() {
        const arr = await fetchAllFiles();
        setAllFiles(arr);
      }
      getFiles();
    },
    [fetchAllFiles]
  );

  return (
    <div className={styles.container}>
      <h1>Files uploaded by you:</h1>
      <div>
        <ul>
          {allFiles.map((f) => (
            <div key={f.id} className={styles.itemC}>
              <li key={f.id}>{f.Filename}</li>
              <button>Process</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FIleList;
