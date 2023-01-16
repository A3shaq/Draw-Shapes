import React, { useEffect, useState, useMemo } from "react";
import { SHAPES } from "../constants/shapes";
import { getRandomColor } from "../utils";
import Objective from "./Objective";
import Steps from "./Steps";

function ShapeBuilder({ shape = "", count = 0, rotation = false }) {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const _shapes = [];

    for (let index = 1; index <= count; index++) {
      _shapes.push({ id: index, selected: false, color: "blue" });
    }

    return setShapes(_shapes);
  }, [count]);

  const handleSelect = (id) => {
    setShapes((prevShapes) => {
      return prevShapes.map((each) => {
        if (each.id === id) {
          return { ...each, selected: !each.selected };
        }

        return each;
      });
    });
  };

  const handleChangeColor = () => {
    setShapes((_shapes) =>
      shapes.map((each) => {
        if (each.selected) {
          return { ...each, color: getRandomColor() };
        }
        return { ...each };
      })
    );
  };

  const selectedShapes = useMemo(() => {
    return shapes.filter((each) => each.selected);
  }, [shapes]);

  const Shape = SHAPES[shape];

  return (
    <div>
      <button onClick={handleChangeColor} className="btn btn-success my-2">
        Change Color
      </button>
      <div className="wrapper">
        {shapes.map((item) => {
          return (
            <div
              key={item.id}
              className={`relative ${
                rotation && item.selected ? "rotate" : ""
              }`}
            >
              <Shape
                fill={item.color ? item.color : "blue"}
                onClick={() => handleSelect(item.id)}
                stroke={item.selected ? "black" : "transparent"}
              />
              <p className="count">{item.id}</p>
            </div>
          );
        })}
      </div>

      {!!shapes.length && (
        <div>
          <p>
            Selected Boxes:
            {selectedShapes.map((shape) => shape.id).join(", ")}
          </p>
          <p>
            Changing Color:{" "}
            {selectedShapes
              .map((shape) => `${shape.id} => ${shape.color}`)
              .join(", ")}
          </p>
          <p>
            Action Animate:
            {selectedShapes.map((shape) => shape.id).join(", ")}
          </p>
        </div>
      )}

      <Objective />

      <Steps />
    </div>
  );
}

export default ShapeBuilder;
