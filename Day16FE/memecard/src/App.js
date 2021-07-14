import './App.css';
import meme from './meme.png'

function Card(){
  return(
    <div className = "meme-container"> 
      <img src = {meme} alt= "meme"></img>
      <h2 className = "caption">Python is a meme</h2>
      <h3 className = "caption"> Lo ban gya day 16 ka THA</h3>
    </div>
  )
}
function App() {
  return (
    <Card/>
  );
}

export default App;
