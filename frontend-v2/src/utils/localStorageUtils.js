import { isValidJSON } from "./helpers.js";

// Store in localstorage
export const saveToLocalStorage = (key, data) => {
  if (isValidJSON(data) === true) {
    localStorage.setItem(key, data);
  } else {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

// Get from localstorage
export const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

// Update current file info in localstorage
export const addCurrentFileToLocalStorage = (curr) => {
  console.log(curr?.file);
  saveToLocalStorage("current_file", curr?.file_data_text);
  saveToLocalStorage("current_file_name", curr?.file[0]?.file_name);
  saveToLocalStorage("current_file_keys", curr?.file[0]?.table_keys);
  saveToLocalStorage("current_file_format", curr?.file[0]?.file_format);
};

// Reset current file infor in lcoastorage
export const resetCurrentFileInLocalStorage = () => {
  saveToLocalStorage("current_file", "");
  saveToLocalStorage("current_file_name", "");
  saveToLocalStorage("current_file_keys", "");
  saveToLocalStorage("current_file_format", "");
  saveToLocalStorage("current_process_log", "");
};

// Get current file info from localstorage
export const getCurrentfileInfoFromLocal = () => {
  const cFile = getFromLocalStorage("current_file");
  const cFileName = getFromLocalStorage("current_file_name");
  const cFileKeys = getFromLocalStorage("current_file_keys");
  const cFileFormat = getFromLocalStorage("current_file_format");
  console.log({ cFile, cFileName, cFileKeys, cFileFormat });

  return { cFile, cFileName, cFileKeys, cFileFormat };
};

// Add item to current process log
export const updateProcessLogInLS = (process_item) => {
  let log = [];
  const currLog = getFromLocalStorage("current_process_log");
  if (currLog === null) {
    log.push(process_item);
  } else {
    log = [...currLog, process_item];
  }
  saveToLocalStorage("current_process_log", log);
};
