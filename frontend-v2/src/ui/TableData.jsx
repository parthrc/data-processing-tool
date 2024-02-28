import { useState } from "react";
import styled from "styled-components";
import {
  getCurrentfileInfoFromLocal,
  updateCurrentFileBodyToLocalStorage,
} from "../utils/localStorageUtils.js";

const StyledTableData = styled.td`
  padding: 0.3rem;
  border: 1px solid white;

  ::placeholder {
    color: black;
  }
`;

const StyledInputCell = styled.input`
  border: none;
  width: 8rem;
  background-color: var(--color-grey-200);
`;

function TableData({ children, item, header, keyy }) {
  //State to manage
  const [data, setData] = useState(children);

  const [cFile, setCfile] = useState();

  // get current file
  function handleFocus() {
    let { cFile: file } = getCurrentfileInfoFromLocal();
    setCfile(file);
  }

  //Filter current value from the file
  function updateCurrentCell(latest) {
    cFile.map(function (f, index) {
      if (index === keyy) {
        f[header] = latest;
      }
    });

    updateCurrentFileBodyToLocalStorage(cFile);
  }

  // onChange handler
  function handleUpdateCell(e) {
    const latest = e.target.value;
    setData(latest);

    updateCurrentCell(latest);
  }

  return (
    <StyledTableData>
      <StyledInputCell
        type="text"
        value={data}
        onChange={handleUpdateCell}
        onFocus={handleFocus}
      ></StyledInputCell>
      {/* {children} */}
    </StyledTableData>
  );
}

export default TableData;
