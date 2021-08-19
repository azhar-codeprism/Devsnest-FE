import { useState } from "react";
import { addTodo } from "../actions";
import { useDispatch } from "react-redux";
const Input = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  return (
    <section>
      <input
        type="text"
        value={todo}
        onChange={(ev) => setTodo(ev.target.value)}
      ></input>
      <button
        className="add-button"
        onClick={() => {
          todo
            ? dispatch(addTodo({ title: todo, status: false }))
            : setTodo("");
          setTodo("");
        }}
      >
        +
      </button>
    </section>
  );
};

export default Input;
