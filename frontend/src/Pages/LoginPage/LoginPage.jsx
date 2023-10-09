import { useEffect, useState } from "react";
import styles from "./LoginPage.module.css";
import { useUsers } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  //Context
  const {
    loginUser,
    isLoading,
    loggedInUserId,
    setLoggedInUserId,
    setLoggedInUsername,
  } = useUsers();

  const navigate = useNavigate();

  //States
  const [email, setEmail] = useState("");
  const [pw1, setPw1] = useState("");

  //Constants
  const userInfo = {
    email: email,
    password: pw1,
  };

  //Reset form
  function resetForm() {
    setEmail("");
    setPw1("");
  }

  //Handle login
  async function handleLogin(e) {
    e.preventDefault();
    if (email === "") {
      return alert("Email connot be empty");
    }
    const res = await loginUser(userInfo);
    console.log(res);

    if (res.status == "Success") {
      console.log(res.data.user_id);
      setLoggedInUserId(res.data.user_id);
      setLoggedInUsername(res.data.name);
      alert("User login success. Redirecting to the dashboard");
      return navigate("/dashboard");
    }
    resetForm();
    alert(res.msg);
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email-input">Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="pw1-input">Enter password:</label>
            <input
              type="password"
              value={pw1}
              onChange={(e) => setPw1(e.target.value)}
            ></input>
          </div>
          <div className={styles.btnContainer}>
            <button onClick={handleLogin} id={styles.btn}>
              Login
            </button>
            <p>
              Not registered?
              <a href="/register"> Register now</a>
              <br />
              Forgot password?
              <a href="/reset"> Reset now</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
