import styled from "styled-components";
import Button from "../../ui/Button.jsx";
import {
  getFromLocalStorage,
  saveToLocalStorage,
  updateProcessLogInLS,
} from "../../utils/localStorageUtils.js";
import { removeBlanks, removeDuplicates } from "../../utils/processHelpers.js";
import Header from "../../ui/Header.jsx";

const StyledRemovePanelCont = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
`;

const StyledRemoveButton = styled.button`
  font-size: 1.3rem;
  padding: 0.5rem;
  background-color: var(--color-brand-800);
  color: var(--color-grey-50);

  &:hover {
    background-color: var(--color-brand-600);
  }
`;

function RemovePanel() {
  function handleRemoveDuplicates() {
    const curr = getFromLocalStorage("current_file");
    if (curr === undefined) {
      console.log("Please select a file");
      return null;
    }
    const pro_data = removeDuplicates(curr);

    console.log(pro_data);

    console.log("Duplicates removed");

    // udpate current file in localstorage
    saveToLocalStorage("current_file", pro_data.data);
    updateProcessLogInLS(pro_data);
    location.reload();
  }

  function handleRemoveBlanks() {
    const curr = getFromLocalStorage("current_file");
    if (curr === undefined) {
      console.log("Please select a file");
      return null;
    }
    const pro_data = removeBlanks(curr);

    console.log(pro_data);

    console.log("Duplicates removed");

    // udpate current file in localstorage
    saveToLocalStorage("current_file", pro_data.data);
    updateProcessLogInLS(pro_data);
    location.reload();
  }

  return (
    <StyledRemovePanelCont>
      <StyledButtonContainer>
        <StyledRemoveButton onClick={() => handleRemoveDuplicates()}>
          Remove Duplicates
        </StyledRemoveButton>
        <StyledRemoveButton onClick={() => handleRemoveBlanks()}>
          Remove Blanks
        </StyledRemoveButton>
      </StyledButtonContainer>
    </StyledRemovePanelCont>
  );
}

export default RemovePanel;
