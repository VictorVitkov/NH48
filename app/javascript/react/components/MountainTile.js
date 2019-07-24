import React from 'react'
import { Link } from 'react-router-dom'

const MountainTile = props => {

  return(
    <div>
      <li><Link to={`/mountains/${props.id}`}>{props.name}</Link></li>
    </div>
  )
}

export default MountainTile
