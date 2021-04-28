import React from 'react'
import EmployeeList from './EmployeeList'
import {MovieProvider} from './EmployeeContext'
import Navbar from './Navbar'
import {CssBaseline} from '@material-ui/core'


const App = () =>{

  return(
    <>
      <CssBaseline />
      <MovieProvider>
          <Navbar />
          <EmployeeList />
      </MovieProvider>
    </>
  )
}

export default App