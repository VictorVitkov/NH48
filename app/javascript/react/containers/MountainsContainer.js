import React from 'react';

class MountainsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  // Next step: in a componentDidMount, add a fetch to get data from /api/v1/mountains
  // You'll need to create a controller in /app/controllers/api/v1/mountains_controller.rb
  // that will get this data from your database and return it as json 

  render() {
    return(
      <div>
        <h1>Take me to the Mountains!</h1>

      </div>
    )
  }
}

export default MountainsContainer
