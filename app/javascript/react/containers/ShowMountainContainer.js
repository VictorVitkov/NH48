import React from 'react'
import ShowMountainTile from '../components/ShowMountainTile'

class ShowMountainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMountain: ""
    }
  }

  componentDidMount(){
    console.log(`/api/v1/mountains/${this.props.match.params.id}`)
    fetch(`/api/v1/mountains/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(response => {
      debugger
      this.setState({ selectedMountain: response.mountain })
    })
  }

  render(){

    return(
      <div>
        <ShowMountainTile
          key={this.state.selectedMountain.id}
          name={this.state.selectedMountain.name}
          elevation={this.state.selectedMountain.elevation}
        />
      </div>
    )
  }
}

export default ShowMountainContainer
