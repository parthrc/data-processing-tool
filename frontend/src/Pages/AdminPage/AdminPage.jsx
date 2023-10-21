import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./AdminPage.module.css";

function AdminPage() {
  const navigate = useNavigate();
  return (
    <>
      <nav className={styles.main}>
        <span>
          <a href="/dashboard">Data Processing Tool</a>
        </span>
        <div className={styles.right}>
          <span>Welcome, Admin</span>
          <button className={styles.homeBtn}>
            <a href="/dashboard">Home</a>
          </button>
          <button className={styles.logoutBtn} onClick={() => navigate("/")}>
            Logout
          </button>
        </div>
      </nav>
    </>
  );
}

export default AdminPage;
