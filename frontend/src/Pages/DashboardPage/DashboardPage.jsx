import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { useUsers } from "../../Context/UserContext";
import styles from "./DashboardPage.module.css";
import { useEffect } from "react";
import FIleList from "../../Components/FileList/FIleList";
import UploadFile from "../../Components/FileList/UploadFile";
function DashboardPage() {
  const { loggedInUserId } = useUsers();
  const navigate = useNavigate();
  //Effect to redirect user to login if not logged in
  useEffect(function () {
    if (loggedInUserId === "0") navigate("/login");
  }, []);
  return (
    <>
      <Navbar />
      <div className={styles.dashC}>
        <FIleList />
        <UploadFile />
      </div>
    </>
  );
}

export default DashboardPage;
