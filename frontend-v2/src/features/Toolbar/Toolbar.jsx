import styled from "styled-components";
import Header from "../../ui/Header.jsx";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaSort } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import ToolbarItem from "../../ui/ToolbarItem.jsx";
import { getFromLocalStorage } from "../../utils/localStorageUtils.js";
import { useState } from "react";
import ToolbarAccordian from "./ToolbarAccordian.jsx";
import RemovePanel from "./RemovePanel.jsx";
import FilterPanel from "./FilterPanel.jsx";
import SortPanel from "./SortPanel.jsx";
import JsonToExcel from "../Download/JsonToExcel.jsx";
import JsonToCsv from "../Download/JsonToCsv.jsx";
import JsonFile from "../Download/JsonFile.jsx";

const ToolbarDownloadAsCont = styled.div`
  background-color: var(--color-grey-300);
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

const DlButtonsCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ToolbarMainCont = styled.div`
  background-color: white;
  padding: 1rem;
  margin-top: 1.5rem;
  margin-inline: 1.5rem;
  border-radius: 10px;
`;

const ToolsbarContainer = styled.div`
  background-color: white;
  margin: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
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
    <ToolbarMainCont>
      <Header bgcolor="secondary" size="small">
        Toolbar
      </Header>
      <ToolsbarContainer>
        <ToolbarItem
          onClick={() => handleToolbarItemClick("remove_duplicates")}
          title="Remove"
        >
          <IoIosRemoveCircle />
        </ToolbarItem>

        <ToolbarItem
          onClick={() => handleToolbarItemClick("filter")}
          title="Filter"
        >
          <FaFilter />
        </ToolbarItem>
        <ToolbarItem
          onClick={() => handleToolbarItemClick("sort")}
          title="Sort"
        >
          <FaSort />
        </ToolbarItem>
        {/* <UpdateFileButton bgcolor="blue"></UpdateFileButton> */}
        <ToolbarDownloadAsCont>
          <p>Download file as: </p>
          <DlButtonsCont>
            <JsonToExcel>Excel</JsonToExcel>
            <JsonToCsv>Csv</JsonToCsv>
            <JsonFile>Json</JsonFile>
          </DlButtonsCont>
        </ToolbarDownloadAsCont>
      </ToolsbarContainer>

      {showPanel && (
        <ToolbarAccordian onClick={closePanel} activeProcess={activeProcess}>
          {activeProcess === allProcesses[0] && <RemovePanel />}
          {activeProcess === allProcesses[1] && <FilterPanel />}
          {activeProcess === allProcesses[2] && <SortPanel />}
        </ToolbarAccordian>
      )}
    </ToolbarMainCont>
  );
}

export default Toolbar;
