import React from 'react'

const ShowMountainTile = props => {

  let name = props.name
  let elevation = props.elevation

  return(
    <div>
      <h1>Name: {name} | Elevation in Feet: {elevation}</h1>
    </div>

  )
}

export default ShowMountainTile
