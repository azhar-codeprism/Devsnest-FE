import "./App.css";
import Navbar from "./components/Navbar";
import React, { useReducer } from "react";

const initialState = false;
export const loginContext = React.createContext();
const reducer = (state, action) => {
  switch (action) {
    case "Login":
      return true;
    case "Logout":
      return false;
    default:
      return initialState;
  }
};
function App() {
  const [isLoggedin, dispatch] = useReducer(reducer, initialState);
  return (
    <loginContext.Provider
      value={{ loginStatus: isLoggedin, loginDispatch: dispatch }}
    >
      <div>
        <Navbar />
      </div>
    </loginContext.Provider>
  );
}

export default App;
