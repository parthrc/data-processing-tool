import { useState } from "react";
import {
  getFromLocalStorage,
  saveToLocalStorage,
  updateProcessLogInLS,
} from "../../utils/localStorageUtils.js";
import Button from "../../ui/Button.jsx";
import toast from "react-hot-toast";
import { sortyByKey } from "../../utils/processHelpers.js";
import styled from "styled-components";

const StyledSortPanelContainer = styled.div`
  display: flex;
  flex-direction: row;

  padding: 0.5rem;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  border: 5px solid var(--color-brand-500);
`;

const StyledLabel = styled.label`
  font-size: 1.5rem;
`;

const StyledSelect = styled.select`
  font-size: 1.5rem;
  color: black;
`;
const StyledInput = styled.input`
  font-size: 1.5rem;
  color: black;
`;

const StyledSortOptionsContainer = styled.div`
  background-color: var(--color-brand-800);
  padding: 0.2rem;
  color: white;
`;

function SortPanel() {
  const currFileKeys = getFromLocalStorage("current_file_keys") || [
    "No keys found",
  ];

  const [selectedValue, setSelectedValue] = useState("");
  const [order, setOrder] = useState("");

  // Event handler for dropdown change
  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  // Main Sort handler
  function handleSort() {
    if (selectedValue === "" || order === "") {
      toast.error("Please select Index and sorting order");
      return null;
    }
    const curr = getFromLocalStorage("current_file");
    if (curr === undefined) {
      console.log("Please select a file");
      return null;
    }
    const pro_data = sortyByKey(selectedValue, curr, order);

    console.log(pro_data);

    console.log("Duplicates removed");

    // udpate current file in localstorage
    saveToLocalStorage("current_file", pro_data.data);
    updateProcessLogInLS(pro_data);
    location.reload();
  }

  return (
    <StyledSortPanelContainer>
      <StyledSortOptionsContainer>
        <StyledLabel htmlFor="dropdown">Select an option:</StyledLabel>
        <StyledSelect
          id="dropdown"
          value={selectedValue}
          onChange={handleDropdownChange}
        >
          <option value="" disabled>
            Select an option
          </option>
          {currFileKeys.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </StyledSelect>
      </StyledSortOptionsContainer>
      <StyledSortOptionsContainer>
        <StyledLabel htmlFor="sortOrder">Select order:</StyledLabel>
        <StyledSelect
          id="orderDropdown"
          value={order}
          onChange={handleOrderChange}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </StyledSelect>
      </StyledSortOptionsContainer>
      <Button onClick={handleSort}>Sort</Button>
    </StyledSortPanelContainer>
  );
}

export default SortPanel;
