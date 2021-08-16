import { useContext } from "react";
import { loginContext } from "../App";

const Home = () => {
  let login = useContext(loginContext);
  return (
    <div className="align-middle">
      <h1>Homepage</h1>

      {login.loginStatus ? (
        <button
          onClick={() => {
            login.loginDispatch("Logout");
          }}
        >
          Logout
        </button>
      ) : (
        <div className="align-middle">
          <button
            onClick={() => {
              login.loginDispatch("Login");
            }}
          >
            login
          </button>
        </div>
      )}
    </div>
  );
};
export default Home;
