import styled from "styled-components";
import Header from "../../ui/Header.jsx";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaSort } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import ToolbarItem from "../../ui/ToolbarItem.jsx";

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
      console.log("Duplicates removed");
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
