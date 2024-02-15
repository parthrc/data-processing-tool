import styled from "styled-components";
import {
  getCurrentfileInfoFromLocal,
  getFromLocalStorage,
} from "../utils/localStorageUtils.js";

const StyledProcessLog = styled.div`
  background-color: yellow;
`;

function ProcessLog() {
  const log = getFromLocalStorage("current_process_log");
  console.log(log);
  return (
    <StyledProcessLog>
      <ul>
        {log !== "" ? (
          <>
            {log.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </>
        ) : (
          <li>No logs</li>
        )}
      </ul>
    </StyledProcessLog>
  );
}

export default ProcessLog;
