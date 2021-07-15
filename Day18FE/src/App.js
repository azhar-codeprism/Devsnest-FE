import './App.css';
import BlackBox from './black-box';
import WhiteBox from './white-box';

function EvenRow() {
  return (
    <div className="chessrow">
      <WhiteBox />
      <BlackBox />
      <WhiteBox />
      <BlackBox />
      <WhiteBox />
      <BlackBox />
      <WhiteBox />
      <BlackBox />
    </div>
  )
}

function OddRow() {
  return (
    <div className="chessrow">
      <BlackBox />
      <WhiteBox />
      <BlackBox />
      <WhiteBox />
      <BlackBox />
      <WhiteBox />
      <BlackBox />
      <WhiteBox />
    </div>);
}
function App() {
  return (
    <div className="chessboard">
      <EvenRow />
      <OddRow />
      <EvenRow />
      <OddRow />
      <EvenRow />
      <OddRow />
      <EvenRow />
      <OddRow />
    </div>
  );
}

export default App;
