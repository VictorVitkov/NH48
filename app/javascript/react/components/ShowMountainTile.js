import React from 'react'

const ShowMountainTile = props => {

  let name = props.name
  let elevation = props.elevation
  let description= props.description
  let distance= props.distance
  let directions= props.directions

  return(
    <div>
      <h1>{name}</h1>
      <h3>Elevation in Feet: {elevation}</h3>
      <p>{description}</p>
      <h3>{distance}</h3>

      <div className="display-linebreak">
        <p>{directions}</p>
      </div>
    </div>

  )
}

export default ShowMountainTile
