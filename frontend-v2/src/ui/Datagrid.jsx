import "react-data-grid/lib/styles.css";

import DataGrid from "react-data-grid";
import { demoData1, demoData2, demoData3 } from "../utils/data.js";


function Datagrid() {
  // Generate columns dynamically based on the keys of the first object
  const columns =
    demoData1.length > 0
      ? Object.keys(demoData1[0]).map((key) => ({ key, name: key }))
      : [];

  return <DataGrid columns={columns} rows={demoData1}></DataGrid>;
}

export default Datagrid;
