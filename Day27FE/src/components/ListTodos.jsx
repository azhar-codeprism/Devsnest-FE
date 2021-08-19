import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editStatus } from "../actions/index";
import delImg from "./delete.png";
import checkImg from "./check.png";
const ListTodos = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <section className="center">
      {todos.map((el, idx) =>
        el.status ? (
          <div key={idx} className="list-item">
            <span>
              <strike>
                <b>{idx + 1}.</b> {el.title}
              </strike>
            </span>
            <div>
              <button onClick={() => dispatch(removeTodo(idx))}>
                <img src={delImg} alt="d"></img>
              </button>
            </div>
          </div>
        ) : (
          <div key={idx} className="list-item">
            <span>
              <b>{idx + 1}.</b> {el.title}
            </span>
            <div>
              <button onClick={() => dispatch(editStatus(idx))}>
                <img src={checkImg} alt=""></img>
              </button>
              <button onClick={() => dispatch(removeTodo(idx))}>
                <img src={delImg} alt="d"></img>
              </button>
            </div>
          </div>
        )
      )}
    </section>
  );
};
export default ListTodos;
