import React from 'react';
import HikeTile from '../components/HikeTile'

class HikesContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hikes: []
    };
  };

  componentDidMount() {
    fetch('/api/v1/hikes')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        let errorMessage = `${reponse.status} (${response.statusText})`
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then((responseBody) => {
      return this.setState({ hikes: responseBody})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {

    let hikes = this.state.hikes.map(hike => {
      return(
        <HikeTile
          key={hike.id}
          id={hike.id}
          name={hike.name}
          date={hike.date}
          description={hike.description}
        />
      )
    })

    return(
      <div>
        <p>you can do this</p>
      </div>
    )
  }
}

export default HikesContainer
