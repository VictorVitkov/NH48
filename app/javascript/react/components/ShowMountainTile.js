import React from 'react'

const ShowMountainTile = props => {

  let name = props.name
  let elevation = props.elevation
  let description = props.description
  let distance = props.distance
  let directions = props.directions
  let image = props.image


  return(
    <div>

      <div className="container">
        <img src={image} className="img"></img>
        <div className="content">
          <p>{name}</p>
          <h2>{elevation} ft.</h2>
        </div>
      </div>

      <div className="outer-div">
        <div className="display-linebreak">
        <p>{description}</p>
        </div>

        <div className="display-linebreak">
        <h3>{distance}</h3>
        <p>{directions}</p>
        </div>
      </div>


    </div>

  )
}

export default ShowMountainTile
