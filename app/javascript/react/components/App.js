import React from 'react'
import { BrowserRouter, Route, Router, Switch, History } from 'react-router-dom'
import MountainsContainer from '../containers/MountainsContainer'
import ShowMountainContainer from '../containers/ShowMountainContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MountainsContainer} />
        <Route exact path="/mountains" component={MountainsContainer} />
        <Route exact path="/mountains/:id" component={ShowMountainContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
