import React, { useRef, useState } from "react";
import { SHAPES } from "./constants/shapes";
import ShapeBuilder from "./components/ShapeBuilder";
import "./App.css";

function App() {
  const shape = useRef();
  const count = useRef();
  const [state, setState] = useState({
    shape: "",
    count: 0,
    rotation: false,
  });

  const onClick = () => {
    const countVal =  +count.current.value;
    if (countVal > 0 && countVal <=6) {
      setState({
        ...state,
        shape: shape.current.value,
        count: countVal,
      });
    } else {
      alert('The number of shapes can be from 1 to 6 inclusive.')
    }
  };

  const handleRotate = () => {
    setState((prev) => ({ ...prev, rotation: true }));
    setTimeout(() => {
      setState((prev) => ({ ...prev, rotation: false }));
    }, 4000);
  };

  const handleClear = () => {
    setState({ shape: "", count: 0, rotation: false });
    count.current.value = "";
  };
  return (
    <div className="App">
      <div className="d-flex">
        <select ref={shape} name="shape" placeholder="Select Shape">
          <option hidden>Select Shape</option>
          {Object.keys(SHAPES).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <input ref={count} type="number" name="count"/>
        <button onClick={onClick} className="btn btn-primary">Draw</button>
        <button onClick={handleRotate} className="btn btn-primary"disabled={state.rotation}>
          Rotate
        </button>
        <button onClick={handleClear}className="btn btn-danger">Clear</button>
      </div>
      {!!state.shape && !!state.count && (
        <ShapeBuilder
          shape={state.shape}
          count={state.count}
          rotation={state.rotation}
        />
      )}
    </div>
  );
}

export default App;
