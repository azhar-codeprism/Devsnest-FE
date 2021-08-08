import { useState } from "react";
const Edit = ({ editMeme, setEditMeme }) => {
  const [memeData, setMemeData] = useState({
    id: editMeme.id,
    username: "memeTester101",
    password: "ksES6bd147",
    box: [],
  });
  const generateMemeHandler = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${memeData.id}&username=${memeData.username}&password=${memeData.password}`;
    memeData.box.map((b, idx) => {
      url += `&boxes[${idx}][text]=${b.text}`;
    });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setEditMeme({ ...editMeme, url: data.data.url });
      });
  };
  return (
    <section className="editContainer">
      <div>
        <img src={editMeme.url} alt=""></img>
      </div>
      <div>
        {[...Array(editMeme.box_count)].map((_, i) => (
          <input
            type="text"
            placeholder={`Caption ${i + 1}`}
            onChange={(ev) => {
              const boxes = memeData.box;
              boxes[i] = { text: ev.target.value };
              setMemeData({ ...memeData, box: boxes });
            }}
          ></input>
        ))}
      </div>
      <div>
        <button onClick={() => setEditMeme(null)}> Choose Tempelate </button>
        <button onClick={() => generateMemeHandler()}> Generate Meme </button>
      </div>
    </section>
  );
};
export default Edit;
