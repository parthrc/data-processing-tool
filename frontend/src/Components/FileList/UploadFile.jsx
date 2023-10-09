import { useState } from "react";
import styles from "./UploadFile.module.css";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../../Context/UserContext";

const BASE_URL = "http://localhost:8000/upload/";
function UploadFile() {
  const { loggedInUserId, loggedInUsername } = useUsers();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [file, setFile] = useState(null);

  //Upload file
  async function handleUpload() {
    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch(
        `http://localhost:8000/upload/${loggedInUserId}`,
        { method: "POST", body: formData }
      );

      const data = await res.json();
      console.log(data);
      if (data.status === "Success") {
        alert("File upload successfully");
        window.location.reload(false);
      } else {
        alert("Please only upload json, csv or excel files");
      }
    } catch {
      alert("Error while uploading");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <h1>Upload new file:</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])}></input>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadFile;
