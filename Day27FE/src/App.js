import "./App.css";
import Input from "./components/Input";
import ListTodos from "./components/ListTodos";
function App() {
  return (
    <div className="center">
      <h3>TODO</h3>
      <Input />
      <ListTodos />
    </div>
  );
}

export default App;
