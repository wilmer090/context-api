import React, {useContext}from 'react'
import {Typography, AppBar, Toolbar, IconButton, Button, makeStyles} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {EmployeeContext} from './EmployeeContext'



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
    // const [{employees}, addEmployee] = useContext(EmployeeContext)

    return (
        <div className={classes.root}>
          <AppBar position="relative">
            <Toolbar>
             
              <Typography variant="h6" className={classes.title}>
                OUR TEAM
              </Typography>
      
            </Toolbar>
          </AppBar>
        </div>
      );
}

export default Navbar