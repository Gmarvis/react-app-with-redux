import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import "./App.css";

function App() {
  const account = useSelector((state) => state.account);

  const dispatch = useDispatch();

  const { depsitMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  console.log(account);
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depsitMoney(1000)}>depisit</button>
      <button onClick={() => withdrawMoney(1000)}>withdraw</button>
    </div>
  );
}

export default App;
