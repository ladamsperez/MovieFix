import React, { Component } from "react"
import { HashRouter, Route, Switch } from "react-router-dom"

import Home from "./Components/Home"
import Results from "./Components/Results"
import MovieDetails from "./Components/MovieDetails"

export default class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/results/:query" exact component={Results} />
          <Route path="/movie/:id" exact component={MovieDetails} />
        </Switch>
      </HashRouter>
    )
  }
}
