import React from 'react'
import jpeg from './house.jpeg'

function Image() {
  return (
    <div style={{textAlign:'center'}}>
      <img src={jpeg} width="80%" height="auto"></img>
    </div>
  )
}

export default Image