import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

//Create the context
const UserContext = createContext();

//Proivder function
function UserProvider({ children }) {
  //States
  const [loggedInUser, setLoggedInUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  //Constants
  const BASE_URL = "http://localhost:8000";

  //Register function
  async function registerUser(newUser) {
    try {
      setIsLoading(true);
      console.log(newUser);
      console.log();
      const res = await fetch(`${BASE_URL}/register/`, {
        method: "POST",
        body: JSON.stringify(newUser),

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      console.log("RESPONSE:", res);
      const data = await res.json();
      console.log("DATA:", data);
    } catch {
      alert("Error occured while registering a new user");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{
        registerUser: registerUser,
        isLoading,
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
