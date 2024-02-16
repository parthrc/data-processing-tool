import Button from "../../ui/Button.jsx";
import {
  getFromLocalStorage,
  saveToLocalStorage,
  updateProcessLogInLS,
} from "../../utils/localStorageUtils.js";
import { removeBlanks } from "../../utils/processHelpers.js";

function RemovePanel() {
  function handleRemove() {
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
  }

  return (
    <div>
      <Button onClick={() => handleRemove()}>Remove Duplicates</Button>
      <Button>Remove Blanks</Button>
    </div>
  );
}

export default RemovePanel;
