import React, { Component } from 'react'
import './App.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
class App extends Component {
  renderRouter(){
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} /> 
      </Switch>
    )
  }

  render() {
    return (
        <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    )
  }
}

export default App
