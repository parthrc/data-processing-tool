import { useState } from "react";
import styles from "./FIleList.module.css";
import { useEffect } from "react";
import { useFiles } from "../../Context/FileContext";
import { useNavigate } from "react-router-dom";

const initialState = [];

function FIleList() {
  const { fetchAllFiles, setCurrentFile, setCurrentFilename } = useFiles();

  const [allFiles, setAllFiles] = useState(initialState);

  const navigate = useNavigate();

  useEffect(function () {
    async function getFiles() {
      const arr = await fetchAllFiles();

      setAllFiles((s) => arr);
      console.log(typeof allFiles);
      console.log(Object.keys(allFiles).length);
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

  // {
  //   Object.keys(allFiles).length > 0 ? (
  //     <div className={styles.container}>
  //       <h1>Files uploaded by you:</h1>
  //       <div>
  //         <ul>
  //           {allFiles.map((f) => (
  //             <div key={f.id} className={styles.itemC}>
  //               <li key={f.id}>{f.Filename}</li>
  //               <button onClick={(e) => handleProcess(f.id, f.Filename)}>
  //                 Process
  //               </button>
  //             </div>
  //           ))}
  //         </ul>
  //       </div>
  //     </div>
  //   ) : (
  //     <div className={styles.container}>
  //       <h1>No files uploaded yet</h1>
  //     </div>
  //   );
  // }

  if (Object.keys(allFiles).length > 0) {
    console.log(Object.keys(allFiles).length);
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

  return (
    <div className={styles.container}>
      <h1>No files uploaded yet</h1>
    </div>
  );
}

export default FIleList;
