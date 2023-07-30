import { bindActionCreators } from "redux";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "./action-creators";

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositeMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="App">
      <h3>{account}</h3>
      <button onClick={() => depositeMoney(10)}>Deposite 10</button>
      <button onClick={() => withdrawMoney(10)}>Withdraw 10</button>
    </div>
  );
}

export default App;
