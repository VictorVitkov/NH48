import React from 'react'
import { BrowserRouter, Route, Router, Switch, History } from 'react-router-dom'
import MountainsContainer from '../containers/MountainsContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MountainsContainer} />
        <Route exact path="/mountains" component={MountainsContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
