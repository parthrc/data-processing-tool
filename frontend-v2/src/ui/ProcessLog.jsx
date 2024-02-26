import styled, { css } from "styled-components";
import { getFromLocalStorage } from "../utils/localStorageUtils.js";

const StyledNoLogs = styled.p`
  text-align: center;
  text-transform: uppercase;
`;

// Styled of process list item based on success
// or fail
const logItemType = {
  success: css`
    border: 5px solid green;
  `,
  fail: css`
    border: 5px solid red;
  `,
  pass: css`
    border: 5px solid yellow;
  `,
};

const StyledProcessLog = styled.div`
  background-color: white;
  padding: 1rem;
  font-size: 2rem;
`;

const StyledLogListItem = styled.li`
  font-size: 1.2rem;
  padding: 0.3rem;
  margin-bottom: 0.1rem;
  color: black;
  ${(props) => logItemType[props.type]}
`;

StyledLogListItem.defaultProps = {
  type: "pass",
};

function ProcessLog() {
  const log = getFromLocalStorage("current_process_log");

  return (
    <StyledProcessLog>
      <ul>
        {log !== "" ? (
          <>
            {log.map(function (item, index) {
              if (item.status === "Success") {
                return (
                  <StyledLogListItem type="success" key={index}>
                    {item.msg}
                  </StyledLogListItem>
                );
              }
              if (item.status === "Fail") {
                return (
                  <StyledLogListItem type="fail" key={index}>
                    {item.msg}
                  </StyledLogListItem>
                );
              }
              return (
                <StyledLogListItem type="pass" key={index}>
                  {item.msg}
                </StyledLogListItem>
              );
            })}
          </>
        ) : (
          <StyledNoLogs>No logs</StyledNoLogs>
        )}
      </ul>
    </StyledProcessLog>
  );
}

export default ProcessLog;
