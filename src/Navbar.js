import React, {useContext}from 'react'
import {Typography, AppBar, Toolbar, IconButton, Button, makeStyles} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {MovieContext} from './MovieContext'
import AddMovieModalButton from './AddMovieModalButton'


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
    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div className={classes.root}>
          <AppBar position="static">
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