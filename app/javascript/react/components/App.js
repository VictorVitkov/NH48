import React from 'react'
import { BrowserRouter, Route, Router, Switch, History } from 'react-router-dom'
import MountainsContainer from '../containers/MountainsContainer'
import ShowMountainContainer from '../containers/ShowMountainContainer'
import NewHikeContainer from '../containers/NewHikeContainer'
import HikesContainer from '../containers/HikesContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MountainsContainer} />
        <Route exact path="/mountains" component={MountainsContainer} />
        <Route exact path="/mountains/:id" component={ShowMountainContainer} />
        <Route exact path="/hikes" component={HikesContainer} />
        <Route exact path="/hikes/new" component={NewHikeContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
