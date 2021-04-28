import React, {useState, useContext}from 'react'
import {useForm} from 'react-hook-form'
import {Typography, AppBar, Toolbar, Modal, Backdrop, Fade, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {MovieContext} from './MovieContext'


const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


const AddMovieModalButton = () =>{
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [movies, setMovies] = useContext(MovieContext)

    const handleClose = () =>{
        setOpen(false)
    }
    const handleOpen = () =>{
        setOpen(true)
    }
    const {register, handleSubmit, formState:{errors}} = useForm()

    const onSubmit = ({name, price}, e) =>{
        setMovies(prevMovies => [...prevMovies, {name : name, price : `$${price}`}])
        e.target.reset()
        handleClose()
    }

    return(
        <>
         <div>
            <Button type="button" onClick={handleOpen} variant="contained" color="secondary">
                ADD MOVIE
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
            <Fade in={open}>
              <div className={classes.paper}>
                <h2 id="transition-modal-title">Add new movie</h2>
                <p id="transition-modal-description">lorem ip sum.</p>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("name")} placeholder="Title"/>
                        <input type="number" {...register("price")} placeholder="Price"/>
                        <button type="submit">Add</button>
                    </form>
                </div>
               </div>
            </Fade>
            </Modal>
          </div>
        </>
    )
}

export default AddMovieModalButton
