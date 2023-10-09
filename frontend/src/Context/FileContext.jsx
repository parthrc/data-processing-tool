import { useContext, useState } from "react";
import { createContext } from "react";

const FileContext = createContext();

//Provider
function FileProvider({ children }) {
  const loggedInUserId = localStorage.getItem("loggedInUserId") || "0";

  const [currentFile, setCurrentFile] = useState("");

  //Get all files of a user
  async function fetchAllFiles() {
    try {
      console.log(loggedInUserId);
      const res = await fetch(`http://localhost:8000/${loggedInUserId}/files`);
      console.log(res);
      const data = await res.json();
      console.log("DATA", data);
      return data;
    } catch {
      alert("Error occured while getting all files");
    }
  }

  return (
    <FileContext.Provider
      value={{
        fetchAllFiles,
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
