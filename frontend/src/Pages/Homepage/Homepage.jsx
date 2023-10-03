import { useNavigate } from "react-router-dom";
import styles from "./Homepage.module.css";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className={styles.main}>
      <div className={styles.titleContainer}>
        <h1>DATA PROCCESSING AND CLEANING TOOL</h1>
        <p>
          Data cleaning and processing is a crucial step in data analysis that
          involves identifying and correcting errors, inconsistencies, and
          inaccuracies in data to ensure that it is accurate, complete, and
          reliable.
        </p>
        <p>
          The goal of this project is to develop a smart data cleaning and
          processing tool that allows anyone to clean and process data without
          the need for programming skills.
        </p>
      </div>
      <div className={styles.btnContainer}>
        <button onClick={() => navigate("register")}>Register</button>
        <button onClick={() => navigate("login")}>Login</button>
      </div>
    </div>
  );
}

export default Homepage;
