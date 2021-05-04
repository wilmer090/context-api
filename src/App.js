import React from 'react'
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom'
import EmployeeList from './EmployeeList'
import {EmployeeProvider} from './EmployeeContext'
import {Home} from './Home'
import {CssBaseline} from '@material-ui/core'
import { EditEmployeeInfo } from './EditEmployeeInfo'


const App = () =>{

  return(
    <>
      <CssBaseline />
      <Router>
      <EmployeeProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/edit/:id" exact component={EditEmployeeInfo} />
        </Switch>  
      </EmployeeProvider>
      </Router>
    </>
  )
}

export default App