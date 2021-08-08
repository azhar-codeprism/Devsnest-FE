import "./App.css";
import { useEffect, useState } from "react";
import Tempelates from "./components/tempelates";
import Edit from "./components/Edit";
function App() {
  let [tempelates, setTempelates] = useState([]);
  let [editMeme, setEditMeme] = useState(null);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setTempelates(data.data.memes));
  }, []);
  return (
    <div className="main">
      {editMeme === null ? (
        <Tempelates temp={tempelates} setEditMeme={setEditMeme} />
      ) : (
        <Edit editMeme={editMeme} setEditMeme={setEditMeme} />
      )}
    </div>
  );
}

export default App;
