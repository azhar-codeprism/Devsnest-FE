import { useSelector } from "react-redux";

const Output = () => {
  const st = useSelector((state) => state.credentials);

  return (
    <section className="center">
      <h2>Data:</h2>
      <span>
        <b>Name:</b> {st.user}
      </span>
      <br></br>
      <span>
        <b>Email: </b>
        {st.email}
      </span>
    </section>
  );
};
export default Output;
