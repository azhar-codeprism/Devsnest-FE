const InputReducer = (state = { user: "", email: "" }, action) => {
  switch (action.type) {
    case "REG_USER":
      return { ...state, user: action.payload };
    case "REG_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export default InputReducer;
