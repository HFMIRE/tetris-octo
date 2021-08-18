import React from 'react'
import GridSquare from './GridSquare'
// Draws the "next" block view showing the next block to drop
const NextBlock = () => {
    const block = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
      // Map the block to the grid 
      const grid = block.map((rowArray, row) => { // map over the rowArray(array ) + row(index) -> create new array 
          return rowArray.map((square, col) => {
            return <GridSquare key={`${row}${col}`} color={square} /> // map over each array number  and  makes into a grid square  + col (index)
          })
      })
    return (
        <div className="next-block">
        {grid}    
        </div>
    )
}

export default NextBlock
