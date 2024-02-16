import { useState } from "react";
import {
  getFromLocalStorage,
  saveToLocalStorage,
  updateProcessLogInLS,
} from "../../utils/localStorageUtils.js";
import styled from "styled-components";
import Button from "../../ui/Button.jsx";
import { filterBy } from "../../utils/processHelpers.js";
import toast from "react-hot-toast";

const StyledFilterPanelContainer = styled.div`
  color: black;
`;

function FilterPanel() {
  const currFileKeys = getFromLocalStorage("current_file_keys") || [
    "No keys found",
  ];

  const [selectedValue, setSelectedValue] = useState("");
  const [selectedFilterValue, setSelectedFilterValue] = useState("");

  // Event handler for dropdown change
  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // Event handler for filter value change
  const handleFilterValueChange = (event) => {
    setSelectedFilterValue(String(event.target.value));
  };

  //Main filter handler
  function handleFilter() {
    if (selectedValue === "" || selectedFilterValue === "") {
      toast.error("Please select the key and value");
      return null;
    }
    const curr = getFromLocalStorage("current_file");
    if (curr === undefined) {
      console.log("Please select a file");
      return null;
    }
    const pro_data = filterBy(selectedValue, selectedFilterValue, curr);

    console.log(pro_data);

    console.log("Duplicates removed");

    // udpate current file in localstorage
    saveToLocalStorage("current_file", pro_data.data);
    updateProcessLogInLS(pro_data);
  }

  return (
    <StyledFilterPanelContainer>
      <label htmlFor="dropdown">Select an option:</label>
      <select
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
      </select>
      <label htmlFor="filter_value">Value to filter:</label>
      <input
        type="text"
        value={selectedFilterValue}
        onChange={handleFilterValueChange}
      ></input>

      <Button onClick={handleFilter}>Filter</Button>
    </StyledFilterPanelContainer>
  );
}

export default FilterPanel;
