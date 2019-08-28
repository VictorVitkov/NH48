import React from 'react'

class NewHikeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedHike: ""
    }
  }

  render () {
    return (
      <div>
        <h1>Add a New Hike!</h1>
        <p>Name your hike</p>
        <p>Date (mm/dd/yyyy)</p>
        <p>Add a description</p>
        <p>Which Mountains did you summit?</p>
      </div>
    )
  }
}


export default NewHikeContainer
