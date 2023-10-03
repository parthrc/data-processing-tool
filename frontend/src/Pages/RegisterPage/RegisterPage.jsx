import { useState } from "react";
import styles from "./RegisterPage.module.css";
import { useUsers } from "../../Context/UserContext";
import Modal from "../../Components/Modal/Modal";
import Spinner from "../../Components/Spinner/Spinner";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  //Context
  const { registerUser, isLoading } = useUsers();

  const navigate = useNavigate();

  //Constants
  const SECURITY_QUESTIONS = [
    "What is your pet's name?",
    "What is your mother's maiden name?",
    "What is your primary school's name?",
    "What is the name of your favourite teacher?",
    "What is your father's hometown?",
  ];

  //states
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pw1, setPw1] = useState("");
  const [pw2, setPw2] = useState("");
  const [securityQ, setSecurityQ] = useState(SECURITY_QUESTIONS[0]);
  const [securityAns, setSecurityAns] = useState("");

  const newUser = {
    email: email,
    username: username,
    password: pw1,
    security_question: securityQ,
    security_answer: securityAns,
  };

  //Reset form
  function resetForm() {
    setEmail("");
    setUsername("");
    setPw1("");
    setPw2("");
    setSecurityQ(SECURITY_QUESTIONS[0]);
    setSecurityAns("");
  }

  //Register handler
  async function handleRegister(e) {
    e.preventDefault();

    const res = await registerUser(newUser);

    if (res.Status == "Success") {
      alert("User registered successfully. Please login now");
      return navigate("/login");
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
            <label htmlFor="username-input">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <div className={styles.inputGroup}>
            <label htmlFor="pw2-input">Enter password again:</label>
            <input
              type="password"
              value={pw2}
              onChange={(e) => setPw2(e.target.value)}
            ></input>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="securtity-question-input">
              Choose security question:
            </label>
            <select
              name="security-questions"
              onChange={(e) => setSecurityQ(e.target.value)}
              className={styles.inputGroup}
            >
              <option value={SECURITY_QUESTIONS[0]}>
                {SECURITY_QUESTIONS[0]}
              </option>
              <option value={SECURITY_QUESTIONS[1]}>
                {SECURITY_QUESTIONS[1]}
              </option>
              <option value={SECURITY_QUESTIONS[2]}>
                {SECURITY_QUESTIONS[2]}
              </option>
              <option value={SECURITY_QUESTIONS[3]}>
                {SECURITY_QUESTIONS[3]}
              </option>
              <option value={SECURITY_QUESTIONS[4]}>
                {SECURITY_QUESTIONS[4]}
              </option>
            </select>
            <div className={styles.inputGroup}>
              <label htmlFor="answer-input">
                Enter Answer for security question:
              </label>
              <input
                type="text"
                value={securityAns}
                onChange={(e) => setSecurityAns(e.target.value)}
              ></input>
            </div>
          </div>
          <div className={styles.btnContainer}>
            <button onClick={handleRegister} id={styles.btn}>
              Register
            </button>
            <p>
              Already registered?
              <a href="/login"> Login now</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
