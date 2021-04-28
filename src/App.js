import React from 'react'
import MovieList from './MovieList'
import {MovieProvider} from './MovieContext'
import Navbar from './Navbar'
import {Typography, AppBar, Toolbar, CssBaseline} from '@material-ui/core'
import AddMovie from './AddMovie'

const App = () =>{

  return(
    <>
      <CssBaseline />
      <MovieProvider>
          <Navbar />
          <MovieList />
      </MovieProvider>
    </>
  )
}

export default App