import { useNavigate } from "react-router-dom";
import styles from "./ResetPassPage.module.css";
import { useState } from "react";
import { useUsers } from "../../Context/UserContext";
function ResetPassPage() {
  //States
  const [email, setEmail] = useState("");
  const [pw1, setPw1] = useState("");
  const [pw2, setPw2] = useState("");

  const [secQ, setSecQ] = useState("");

  const [emailExist, setEmailExist] = useState("");

  const { checkEmail } = useUsers();

  const navigate = useNavigate();

  //Reset form
  function resetForm() {
    setEmail("");
    setPw1("");
  }

  //Handle reset
  function handleReset() {}

  //hanlde email check
  async function handleEmailCheck(e) {
    e.preventDefault();
    if (email === "") {
      alert("Email cannot be empty");
      resetForm();
      return;
    }

    const res = await checkEmail(email);

    if (res.status === "Fail") {
      alert(res.msg);

      resetForm();
      return;
    }
    setSecQ(res.data.security_question);

    resetForm();
  }

  //Check for email
  {
    if (emailExist === "")
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
              <div className={styles.btnContainer}>
                <button onClick={handleEmailCheck} id={styles.btn}>
                  Enter email
                </button>
                <p>
                  Not registered?
                  <a href="/register"> Register now</a>
                  <br />
                  Need to login?
                  <a href="/login"> Login now</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      );
  }
  //If email exist
  {
    if (secQ !== "") {
      return (
        <div className={styles.main}>
          <div className={styles.container}>
            <form className={styles.form}>hellos</form>
          </div>
        </div>
      );
    }
  }
  /* <div className={styles.inputGroup}>
            <label htmlFor="pw1-input">Enter new password:</label>
            <input
              type="password"
              value={pw1}
              onChange={(e) => setPw1(e.target.value)}
            ></input>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="pw2-input">Enter new password again:</label>
            <input
              type="password"
              value={pw1}
              onChange={(e) => setPw1(e.target.value)}
            ></input>
          </div> */
}

export default ResetPassPage;
