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
