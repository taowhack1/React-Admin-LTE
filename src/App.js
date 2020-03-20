import React, { Component } from 'react'
import './App.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './Components/Maintenance-IT/Home'
import Assign from './Components/Maintenance-IT/Assign'
import Employee from './Components/Maintenance-IT/Main/Employee'
import Approve from './Components/Maintenance-IT/Approve'
class App extends Component {
  renderRouter(){
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Assign" component={Assign} /> 
        {/* <Route exact path="/Operation" component={Home} /> */}
        <Route exact path="/Operation/Queue"  />
        <Route exact path="/Operation/Wait"  />
        <Route exact path="/Operation/InProgress"  />
        <Route exact path="/Operation/Done"  />
        <Route exact path="/Operation/Cancel"  />
        <Route exact path="/Operation/All"  />
        <Route exact path="/Approve" component={Approve} /> 
        <Route exact path="/Main" component={Employee} /> 
        {/* <Route exact path="/Main/Employee" component={Assign} />  */}
        <Route exact path="/Main/PIC"  /> 
        <Route exact path="/OperationReport"  />
        <Route exact path="/ServiceReport"  /> 
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
