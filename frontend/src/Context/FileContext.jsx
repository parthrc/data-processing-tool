import { useContext, useState } from "react";
import { createContext } from "react";

const FileContext = createContext();

//Provider
function FileProvider({ children }) {
  const loggedInUserId = localStorage.getItem("loggedInUserId") || "0";

  //Function to store current file id in localstorage
  function setCurrentFile(file_id) {
    localStorage.setItem("currentFile", file_id);
  }

  function getCurrentFile() {
    return localStorage.getItem("currentFile") || "empty";
  }

  //Set current file name
  function setCurrentFilename(filename) {
    return localStorage.setItem("currentFilename", filename);
  }

  function getCurrentFilename() {
    return localStorage.getItem("currentFilename");
  }

  //Get all files of a user
  async function fetchAllFiles() {
    try {
      // console.log(loggedInUserId);
      const res = await fetch(`http://localhost:8000/${loggedInUserId}/files`);
      console.log("TYPE of RES", typeof res);
      console.log("RES", res);
      // console.log(res);
      const data = await res.json();
      console.log("TYPE of DATA", typeof data);
      console.log(data);
      // console.log("DATA", data, 11);
      if (data.status == "Fail") return {};
      else return data;
    } catch (err) {
      alert(err);
    }
  }

  return (
    <FileContext.Provider
      value={{
        fetchAllFiles,
        setCurrentFile,
        getCurrentFile,
        getCurrentFilename,
        setCurrentFilename,
      }}
    >
      {children}
    </FileContext.Provider>
  );
}

//Custom hook to expose values
function useFiles() {
  const context = useContext(FileContext);

  if (context === undefined)
    throw new Error("FileContext was used outside the FileProvider");

  return context;
}

export { FileProvider, useFiles };
