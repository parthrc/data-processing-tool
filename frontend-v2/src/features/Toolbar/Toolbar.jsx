import styled from "styled-components";
import Header from "../../ui/Header.jsx";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaSort } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import ToolbarItem from "../../ui/ToolbarItem.jsx";
import {
  getFromLocalStorage,
  saveToLocalStorage,
  updateProcessLogInLS,
} from "../../utils/localStorageUtils.js";
import { filterBy, removeBlanks } from "../../utils/processHelpers.js";
import { useState } from "react";
import ToolbarAccordian from "./ToolbarAccordian.jsx";
import RemovePanel from "./RemovePanel.jsx";
import FilterPanel from "./FilterPanel.jsx";
import SortPanel from "./SortPanel.jsx";

const ToolsbarContainer = styled.div`
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-block: 1rem;
`;

function Toolbar() {
  const allProcesses = ["remove", "filter", "sort"];
  // State to store current active process
  const [activeProcess, setActiveProcess] = useState("");
  const [showPanel, setShowPanel] = useState(false);

  // Handle Toolbar items click
  function handleToolbarItemClick(type) {
    const curr = getFromLocalStorage("current_file");
    if (curr === undefined) {
      console.log("Please select a file");
      return null;
    }

    switch (type) {
      case "remove_duplicates": {
        setActiveProcess(allProcesses[0]);
        setShowPanel(true);
        break;
      }

      case "filter": {
        setActiveProcess(allProcesses[1]);
        setShowPanel(true);
        const pro_data = filterBy("Total", "144", curr);

        console.log(pro_data);

        console.log("Filtered");

        // Udpate current file in localstorage
        saveToLocalStorage("current_file", pro_data.data);
        updateProcessLogInLS(pro_data);
        break;
      }
      case "sort": {
        setActiveProcess(allProcesses[2]);
        setShowPanel(true);
        console.log("Sort");
        break;
      }
      default: {
        console.log("Default case");
        break;
      }
    }
  }

  // CLose panel
  function closePanel() {
    setShowPanel(false);
  }

  return (
    <div>
      <Header bgcolor="secondary" size="small">
        Toolbar
      </Header>
      <ToolsbarContainer>
        <ToolbarItem
          onClick={() => handleToolbarItemClick("remove_duplicates")}
        >
          <IoIosRemoveCircle />
          Remove Duplicates
        </ToolbarItem>

        <ToolbarItem onClick={() => handleToolbarItemClick("filter")}>
          <FaFilter />
          Filter
        </ToolbarItem>
        <ToolbarItem onClick={() => handleToolbarItemClick("sort")}>
          <FaSort />
          Sort
        </ToolbarItem>
      </ToolsbarContainer>
      {showPanel && (
        <ToolbarAccordian onClick={closePanel}>
          {activeProcess === allProcesses[0] && <RemovePanel />}
          {activeProcess === allProcesses[1] && <FilterPanel />}
          {activeProcess === allProcesses[2] && <SortPanel />}
        </ToolbarAccordian>
      )}
    </div>
  );
}

export default Toolbar;
