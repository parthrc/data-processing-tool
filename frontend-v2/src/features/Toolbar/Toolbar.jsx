import styled from "styled-components";
import Header from "../../ui/Header.jsx";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaSort } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import ToolbarItem from "../../ui/ToolbarItem.jsx";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/localStorageUtils.js";
import { removeBlanks } from "../../utils/processHelpers.js";

const ToolsbarContainer = styled.div`
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-block: 1rem;
`;

// handle Toolabr items click
function handleToolbarItemClick(type) {
  switch (type) {
    case "remove_duplicates": {
      const curr = getFromLocalStorage("current_file");
      if (curr === undefined) {
        console.log("Please select a file");
        break;
      }

      const pro_data = removeBlanks(curr);

      console.log(pro_data);

      console.log("Duplicates removed");

      // udpate current file in localstorage
      saveToLocalStorage("current_file", pro_data.data);

      break;
    }

    case "filter": {
      console.log("Filter");
      break;
    }
    case "sort": {
      console.log("Sort");
      break;
    }
    default: {
      console.log("Default case");
      break;
    }
  }
}

function Toolbar() {
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
    </div>
  );
}

export default Toolbar;
