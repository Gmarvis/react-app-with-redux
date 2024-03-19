import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const state = useSelector((state) => state);
  return (
    <div className="App">
      <h1>welcome to react with Redux</h1>
    </div>
  );
}

export default App;
