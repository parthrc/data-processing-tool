import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useFiles } from "../../Context/FileContext";
import styles from "./ProcessPage.module.css";

import TableData from "../../Components/Table/TableData";

function ProcessPage() {
  const { getCurrentFile } = useFiles();
  const cfile = getCurrentFile();

  const [table, setFileData] = useState([]);
  //useEffect to get current file
  useEffect(
    function () {
      async function getFile(file_id) {
        try {
          const res = await fetch(`http://localhost:8000/file/${file_id}`);
          const data = await res.json();

          setFileData(data);
        } catch {
          alert("Error occured while fetching current file data");
        }
      }

      getFile(cfile);
    },
    [cfile]
  );

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <table>
          <tbody>
            {Object.keys(table).map(function (i) {
              return (
                <tr key={table[i]}>
                  {Object.keys(table[i]).map(function (j) {
                    return (
                      <TableData key={table[i][j]}>{table[i][j]}</TableData>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className={styles.logContainer}>log</div>
      </div>
    </>
  );
}

export default ProcessPage;
