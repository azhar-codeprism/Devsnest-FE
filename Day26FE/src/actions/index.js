import Input from "../components/Input";

const addUsername = (val) => {
  return {
    type: "REG_USER",
    payload: val,
  };
};

const addEmail = (val) => {
  return {
    type: "REG_EMAIL",
    payload: val,
  };
};

export { addUsername, addEmail };
