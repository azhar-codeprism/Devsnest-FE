const toDoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DEL_TODO":
      return state.filter((_, index) => index !== action.payload);
    case "EDIT_STATUS":
      return state.map((el, i) =>
        i === action.payload ? { ...el, status: true } : el
      );
    default:
      return state;
  }
};
export default toDoReducer;
