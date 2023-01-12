import React, { useRef ,useState} from "react";
import { SHAPES } from "./constants/shapes";
import ShapeBuilder from "./components/ShapeBuilder";
import "./App.css";


function App() {
  const shape = useRef();
  const count = useRef();
  const [state, setStae] = useState({
    shape: "",
    count: 0,
    shapes: [],
    selected: [],
  });



  const onHandleClick = () => {
    setStae({
      ...state,
      shape: shape.current.value,
      count: +count.current.value,
    });
  };

  const handleRotate=()=>{

  }

  
  return (
    <div className="App">
      <select
        ref={shape}
        name="shape"
        placeholder="Select Shape"
      >
        <option hidden>Select Shape</option>
        {Object.keys(SHAPES).map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div>
        <input
          ref={count}
          type="number"
          min={1}
          max={6}
          name="count"
        />
        <button onClick={onHandleClick}>Draw</button>
        <button onClick={handleRotate}>Rotate</button>
      </div>
      {!!state.shape && !!state.count && (
        <ShapeBuilder shape={state.shape} count={state.count} />
      )}
    </div>
  );
}

export default App;
