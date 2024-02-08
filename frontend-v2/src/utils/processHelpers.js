import { demoData2 } from "./data.js";

const jsonArray = [
  { name: "John", age: 25, city: "New York" },
  { name: "Jane", age: 30, city: "San Francisco" },
  { name: "Bob", age: 28, city: "Los Angeles" },
];

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
      data: null,
    };
  }
  //Check if key exist
  const keys = Object.keys(json[0]);

  if (!keys.includes(key)) {
    return {
      status: "Fail",
      msg: `Key does not exist, possible keys are: ${keys}`,

      data: null,
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
  //Check if array is empty
  if (json.length === 0) {
    return {
      status: "Fail",
      msg: "Array is empty",
      data: null,
    };
  }
  //Check if key exist
  const keys = Object.keys(json[0]);

  if (!keys.includes(key)) {
    return {
      status: "Fail",
      msg: `Key does not exist, possible keys are: ${keys}`,

      data: null,
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

  return { status: "Success", msg: "Filter success", data: filteredArray };
}

console.log(sortyByKey("version", demoData2));
