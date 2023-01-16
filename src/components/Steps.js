import React from "react";

const Steps = () => {
  return (
    <div className="text-left px-5">
      <h1>Steps:</h1>
      <p>- Created a dropdown to select from one of the available shapes.</p>
      <p>
        - Created a number input for the user to enter the number of shapes to
        be drawn on the page.
      </p>
      <p>
        - Created a draw button and binded a function on it's click event to
        tell the ShapeRenderer component the shape to draw and how many times to
        draw it.
      </p>
      <p>- Added a select functionality on the click event on the shape.</p>
      <p>
        - Recorded the shapes and their further details (color (optional),
        selected (true/false) in an array.
      </p>
      <p>
        - Implemented a function which will change the color of the selected
        shapes to some random colors.
      </p>
      <p>
        - Wrote the css to rotate the shape along z axis in a class and
        applied/removed the class based on the click event on the rotate button.
      </p>
      <p>
        - Created a button and binded a function on it's click event to reset
        the state of the application.
      </p>
    </div>
  );
};

export default Steps;
