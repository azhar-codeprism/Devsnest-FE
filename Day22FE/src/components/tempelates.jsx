function Tempelates({ temp, setEditMeme }) {
  return (
    <div className="container">
      {temp.map((el) => (
        <div
          className="tempelate"
          onClick={() => {
            setEditMeme(el);
          }}
        >
          <img key={el.id} src={el.url}></img>
        </div>
      ))}
    </div>
  );
}

export default Tempelates;
