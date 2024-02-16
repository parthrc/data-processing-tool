import styled from "styled-components";
import { getFromLocalStorage } from "../utils/localStorageUtils.js";

const StyledProcessLog = styled.div`
  background-color: yellow;
`;

function ProcessLog() {
  const log = getFromLocalStorage("current_process_log");

  return (
    <StyledProcessLog>
      <ul>
        {log !== "" ? (
          <>
            {log.map((item, index) => (
              <li key={index}>{item.msg}</li>
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
