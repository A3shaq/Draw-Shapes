import React, { useEffect, useMemo, useState } from "react";
import { SHAPES } from "../constants/shapes";

function ShapeBuilder({ shape = "", count = 0 }) {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const _shapes = [];

    for (let index = 0; index < count; index++) {
      _shapes.push({ id: index, selected: false });
    }

    return setShapes(_shapes);
  }, [count]);

  const handleSelect = (id) => {
    setShapes(prevShapes => {
        return prevShapes.map(each => {
            if (each.id === id) {
                return { ...each, selected: !each.selected };
            }

            return each;
        })
    })
  };

  const Shape = SHAPES[shape];

  console.log(shapes)

  return (
    <>
      {shapes.map((item) => {
        return (
          <div key={item.id} className={`relative ${""}`}>
            <Shape
            
              fill="blue"
              onClick={() => handleSelect(item.id)}
              stroke={item.selected ? "black" : "transparent"}
            />
            <p className="count">{item.id + 1}</p>
          </div>
        );
      })}
    </>
  );
}

export default ShapeBuilder;
