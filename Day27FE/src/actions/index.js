const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

const removeTodo = (idx) => {
  return {
    type: "DEL_TODO",
    payload: idx,
  };
};

const editStatus = (idx) => {
  return {
    type: "EDIT_STATUS",
    payload: idx,
  };
};

export { addTodo, removeTodo, editStatus };
