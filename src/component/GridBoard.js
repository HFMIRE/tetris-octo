import React from "react";
import GridSquare from "./GridSquare"; // represent a single grid square

// represent a 10 x 10 grid square  -
const GridBoard = (props) => {
  const grid = [];
  // generates an array of 18 rows, each containing 10 GridSquares.

  for (let row = 0; row < 10; row++) {
    grid.push([]); // pushes 10 empty array into grid
    for (let col = 0; col < 18; col++) {
      grid[row].push(<GridSquare key={`${col}${row}`} color="1" />); //pushes 18 column of grid sqaure into the 10 empty array
    }
  }

  return <div className="grid-board">{grid}</div>;
};

export default GridBoard;
