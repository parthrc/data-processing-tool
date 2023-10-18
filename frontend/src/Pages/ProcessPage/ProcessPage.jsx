import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useFiles } from "../../Context/FileContext";
import styles from "./ProcessPage.module.css";

import TableData from "../../Components/Table/TableData";
import Log from "../../Components/Log/Log";

function ProcessPage() {
  const { getCurrentFile, getCurrentFilename } = useFiles();
  const cfile = getCurrentFile();
  const cfilename = getCurrentFilename();

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
          <h1>Currently working on: {cfilename}</h1>
          <tbody>
            {Object.keys(table).map(function (i) {
              return (
                <tr key={table[i]}>
                  {Object.keys(table[i])
                    .reverse()
                    .map(function (j) {
                      return (
                        <TableData key={table[i][j]}>
                          {table[i][j] === "" ? " " : table[i][j]}
                        </TableData>
                      );
                    })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className={styles.logContainer}>
          <h1>Process log:</h1>
          <Log />
        </div>
      </div>
    </>
  );
}

export default ProcessPage;
