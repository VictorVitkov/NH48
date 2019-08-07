import React from 'react';
import MountainTile from '../components/MountainTile'

class MountainsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mountains: []
    };
  };

  // Next step: in a componentDidMount, add a fetch to get data from /api/v1/mountains
  // You'll need to create a controller in /app/controllers
  // that will get this data from your database and return it as json

  componentDidMount() {
    fetch('/api/v1/mountains')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then((responseBody) => {
      return this.setState({ mountains: responseBody })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {

    let mountains = this.state.mountains.map(mountain => {
      return(
          <MountainTile
            key={mountain.id}
            id={mountain.id}
            name={mountain.name}
            elevation={mountain.elevation}
            description={mountain.description}
            distance={mountain.distance}
            directions={mountain.directions}
            image={mountain.image}
          />
      )
    })

    return(
      <div>

        <div className="outer-div">
          <div className="text">
            <h3>New Hampshire's 4,000 footers</h3>
            <p>Click on a mountain below for more info</p>
          </div>
        </div>

        <div className="mountainWrapper">
          {mountains}
        </div>

      </div>
    )
  }
}

export default MountainsContainer
