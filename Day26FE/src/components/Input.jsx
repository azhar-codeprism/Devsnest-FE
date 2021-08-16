import { useDispatch } from "react-redux";
import { addUsername, addEmail } from "../actions/index";
const Input = () => {
  const dispatch = useDispatch();
  return (
    <section className="center">
      <h2>Input:</h2>
      <input
        type="text"
        placeholder="Name"
        onChange={(ev) => dispatch(addUsername(ev.target.value))}
      ></input>
      <input
        type="text>"
        placeholder="Email"
        onChange={(ev) => dispatch(addEmail(ev.target.value))}
      ></input>
    </section>
  );
};

export default Input;
