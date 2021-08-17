import React from 'react'
 // smallest grid square 
 const GridSquare = (props) => {
     const classes = `grid-square color-${props.color}`
    return <div className={classes}/>
    
}
export default GridSquare
