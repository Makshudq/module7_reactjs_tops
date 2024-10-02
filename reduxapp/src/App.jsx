import "./App.css";
import Counter from "./Counter";
import { useDispatch, useSelector } from "react-redux";
import { increament, decreament } from "./Countingslice";

function App() {
  const dispatch = useDispatch();

  const selector = useSelector((state) => {
    return state.counted;
  });
  return (
    <>
      <div className="container">
        <div className="inner_container">
          <h1>{selector}</h1>
          {/* <Counter /> */}
          <div className="btn_grp">
            <button onClick={() => dispatch(increament(1))}>Increament</button>
            <button onClick={() => dispatch(decreament(1))}>Decreament</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
