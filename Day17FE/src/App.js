import './App.css';
import Card from './Card';
function App() {
  return (
    <div className="container">
      <h2 className="card"> GOOD FOR NOTHING CALORIE COUNTER</h2>
      <Card name="IDLI" value="35" />
      <Card name="SAMBHAR" value="64" />
      <Card name="DOSA" value="128" />
      <Card name="LASSI" value="256" />
    </div>
  );
}

export default App;
