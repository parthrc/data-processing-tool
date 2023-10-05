import { useNavigate } from "react-router-dom";
import { useUsers } from "../../Context/UserContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const { logout, loggedInUsername } = useUsers();
  const navigate = useNavigate();
  //Logout handler
  function logoutHandler() {
    logout();
    navigate("/login");
  }

  return (
    <nav className={styles.main}>
      <span>
        <a href="/dashboard">Data Processing Tool</a>
      </span>
      <div className={styles.right}>
        <span>Welcome, {loggedInUsername}</span>
        <button className={styles.homeBtn}>
          <a href="/dashboard">Home</a>
        </button>
        <button className={styles.logoutBtn} onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
