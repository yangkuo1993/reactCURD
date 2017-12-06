import React, {Component} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import App from '../pages/App/App'
import EditBook from '../pages/EditBook/EditBook'

class RouteBasic extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route path='/' exact component={App}></Route>
          <Route path='/EditBook/:id' component={EditBook}></Route>
        </Switch>
      </Router>
    )
  }
}
export default RouteBasic