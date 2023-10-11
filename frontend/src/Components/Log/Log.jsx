import styles from "./Log.module.css";

const arr = [
  "Some process has been done",
  "Some process has been done",
  "Some process has been done",
  "Some process has been done",
  "Some process has been done",
  "Some process has been done",
  "Some process has been done",
];

function Log() {
  return (
    <div className={styles.logC}>
      <ul>
        {arr.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </div>
  );
}

export default Log;
