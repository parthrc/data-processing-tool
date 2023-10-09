import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

//Create the context
const UserContext = createContext();

//Proivder function
function UserProvider({ children }) {
  //States
  const loggedInUserId = localStorage.getItem("loggedInUserId") || "0";
  const loggedInUsername = localStorage.getItem("loggedInUsername") || "";
  const [isLoading, setIsLoading] = useState(false);

  //Constants
  const BASE_URL = "http://localhost:8000";

  //Function to store logged in User_id in localstorage
  function setLoggedInUserId(user_id) {
    localStorage.setItem("loggedInUserId", user_id);
  }
  function setLoggedInUsername(user_name) {
    localStorage.setItem("loggedInUsername", user_name);
  }
  //Logout function
  function logout() {
    localStorage.setItem("loggedInUserId", "0");
  }

  //Register function
  async function registerUser(newUser) {
    try {
      setIsLoading(true);

      const res = await fetch(`${BASE_URL}/register/`, {
        method: "POST",
        body: JSON.stringify(newUser),

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const data = await res.json();

      return data;
    } catch {
      alert("Error occured while registering a new user");
    } finally {
      setIsLoading(false);
    }
  }

  //Login function
  async function loginUser(userInfo) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/login/`, {
        method: "POST",
        body: JSON.stringify(userInfo),

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const data = await res.json();

      return data;
    } catch {
      alert("Error occured while logging in");
    } finally {
      setIsLoading(false);
    }
  }

  //Check if email exist
  async function checkEmail(emaill) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/users/email/${emaill}/`);
      console.log(`${BASE_URL}/users/email/${emaill}`);
      console.log(res);
      const data = await res.json();
      console.log(data);
      return data;
    } catch {
      alert("Error occured while logging in");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{
        registerUser,
        isLoading,
        loginUser,
        loggedInUserId,
        setLoggedInUserId,
        logout,
        setLoggedInUsername,
        loggedInUsername,
        checkEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

//Custom hook to expose the context
function useUsers() {
  const context = useContext(UserContext);
  //CHeck if context is used only in th children of the provider
  if (context === undefined)
    throw new Error("UserContext was used outside of the UserProvider");
  return context;
}

export { UserProvider, useUsers };
