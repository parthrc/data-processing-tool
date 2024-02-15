import { isValidJSON } from "./helpers.js";

/*
* This function sorts an  json array by the given key in asc or desc orders.
@param {string} key - Key to sort by
@param {array} json - JSON array
@param {string} sortOrder - Ascending or descending

@returns {array} sortedArray - Returns sorted array
*/

export function sortyByKey(key, json, sortOrder = "ascending") {
  //Check if array is empty
  if (json.length === 0) {
    return {
      status: "Fail",
      msg: "Array is empty",
      data: json,
    };
  }
  //Check if key exist
  const keys = Object.keys(json[0]);

  if (!keys.includes(key)) {
    return {
      status: "Fail",
      msg: `Key does not exist, possible keys are: ${keys}`,

      data: json,
    };
  }
  // Function to compare objects based on a specific key
  const sortByKeyAsc = (key) => (a, b) => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  };
  // Sort the array by the 'name' key in ascending order
  const sortedArray = json.slice().sort(sortByKeyAsc(String(key)));

  // If descending
  if (sortOrder === "descending") {
    return {
      status: "Success",
      msg: `Sort success in descending order`,

      data: sortedArray.reverse(),
    };
  }

  // If ascending default

  return {
    status: "Success",
    msg: `Sort success in ascending order`,

    data: sortedArray,
  };
}

// sortyByKey("name", jsonArray, "descending");

/*
* Filters given JSON array based on given conditions.
@param {string} key - Key to sort by
@param {string} value - Value of the key, which to filter
@param {array} json - JSON array

@returns {array} filteredArray - JSOn of filtered values

^ TODO: make it so it can take multiple key value pairs to filter on
*/

export function filterBy(key, value, json) {
  if (json.length === 0) {
    //Check if array is empty
    return {
      status: "Fail",
      msg: "Array is empty",
      data: json,
    };
  }
  //Check if key exist
  const keys = Object.keys(json[0]);

  if (!keys.includes(key)) {
    return {
      status: "Fail",
      msg: `Key does not exist, possible keys are: ${keys}`,

      data: json,
    };
  }

  // Filter operation
  const filteredArray = json.filter(
    (x) => String(x[key]).toLowerCase() === String(value.toLowerCase())
  );

  //Check if empty filtered array
  if (filteredArray.length === 0) {
    return {
      status: "Success",
      msg: "Filter success but no values found",
      data: filteredArray,
    };
  }

  const rows_filtered = json.length - filteredArray.length - 1;

  return {
    status: "Success",
    msg: "Filter success",
    data: filteredArray,
    rows_filtered,
  };
}

/*
 * Remove all objects with blank vlaues

@param {array} jsonArray - JSON array

@returns {array} filteredArray - JSON array with no blanks

 */

export function removeBlanks(jsonArray) {
  //Check if array is empty
  if (jsonArray.length === 0) {
    return {
      status: "Fail",
      msg: "Array is empty",
      data: jsonArray,
    };
  }

  // Function to check if an object has any blank value
  const filteredArray = jsonArray.filter((obj) => {
    // Check if any value is blank
    return !Object.values(obj).some(
      (value) =>
        value === null || value === undefined || String(value).trim() === ""
    );
  });

  if (filteredArray.length === jsonArray.length) {
    return {
      status: "Success",
      msg: "No blank values found",
      data: jsonArray,
    };
  }
  const rows_removed = jsonArray.length - filteredArray.length - 1;
  return {
    status: "Success",
    msg: "Filter was successful",
    data: filteredArray,
    rows_removed,
  };
}

/*
 * Remove duplicate objects

@param {array} jsonArray - JSON array

@returns {array} uniqueArray - JSON array with unique objects

 */

export function removeDuplicates(jsonArray) {
  //Check if array is empty
  if (jsonArray.length === 0) {
    return {
      status: "Fail",
      msg: "Array is empty",
      data: jsonArray,
    };
  }
  // Use a Map to keep track of unique objects based on their string representation
  const uniqueObjectsMap = new Map();

  const uniqueArray = jsonArray.filter((obj) => {
    // Convert each object to a string representation
    const objString = JSON.stringify(obj);

    // If the object is not in the Map, add it and return true to keep it in the filtered array
    if (!uniqueObjectsMap.has(objString)) {
      uniqueObjectsMap.set(objString, true);
      return true;
    }
    // If the object is already in the Map, return false to exclude it from the filtered array
    return false;
  });

  const totalDuplicates = jsonArray.length - uniqueArray.length - 1;

  return {
    status: "Success",
    msg: `Total duplicates found: ${totalDuplicates}`,
    data: uniqueArray,
    totalDuplicates,
  };
}
