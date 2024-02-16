import Button from "../../ui/Button.jsx";
import {
  getFromLocalStorage,
  saveToLocalStorage,
  updateProcessLogInLS,
} from "../../utils/localStorageUtils.js";
import { removeBlanks, removeDuplicates } from "../../utils/processHelpers.js";

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
    <div>
      <Button onClick={() => handleRemoveDuplicates()}>
        Remove Duplicates
      </Button>
      <Button onClick={() => handleRemoveBlanks()}>Remove Blanks</Button>
    </div>
  );
}

export default RemovePanel;
