import React from 'react'
import { Link } from 'react-router-dom'

const MountainTile = props => {

  return(

    <div className="mountainTile">
      <Link to={`/mountains/${props.id}`}>
        <img src={props.image} />
        <div className="mountainInfo">
          <div className="infoText">
            <h3>{props.name}</h3>
            <h4>{props.elevation} ft.</h4>
          </div>
        </div>
      </Link>
    </div>

  )
}

export default MountainTile


//
// <div>
//   <li><Link to={`/mountains/${props.id}`}>{props.name}</Link></li>
// </div>

// <div className="mountainTile">
//   <Link to={`/mountains/${props.id}`}>
//     <div className="card">
//       <div className="tileImage">
//         <img src={props.image} />
//       </div>
//
//       <div className="content">
//         <h3>{props.name}</h3>
//         <h4>{props.elevation} ft.</h4>
//       </div>
//     </div>
//   </Link>
// </div>
