import React from 'react'

const ShowMountainTile = props => {

  let name = props.name
  let elevation = props.elevation

  return(
    <div>
      <h1>Name: {name} </h1>
      <h5>Elevation in Feet: {elevation}</h5>

    </div>

  )
}

export default ShowMountainTile
