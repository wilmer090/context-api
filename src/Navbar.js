import React, {useContext}from 'react'
import {Typography, AppBar, Toolbar, IconButton, Button, makeStyles} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {EmployeeContext} from './EmployeeContext'
import AddMovieModalButton from './AddEmployeeModalBtn'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Navbar = () =>{
    const classes = useStyles()
    const [movies, setMovies] = useContext(EmployeeContext)

    return (
        <div className={classes.root}>
          <AppBar position="relative">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                News
              </Typography>
              <AddMovieModalButton />
            </Toolbar>
          </AppBar>
        </div>
      );
}

export default Navbar