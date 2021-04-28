import React, {useState, useEffect, useContext}from 'react'
import {useForm} from 'react-hook-form'
import {Modal, Backdrop, Fade, Button, TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {EmployeeContext} from './EmployeeContext'


const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& .MuiTextField-root' : {
          margin: theme.spacing(2)
      }
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    message : {
        marginLeft : theme.spacing(2),
        marginTop : theme.spacing(0),
        marginBottom : theme.spacing(0)
    }
  }));


const AddMovieModalButton = () =>{

    const classes = useStyles()

    const [open, setOpen] = useState(false)
    
    const [employees, setEmployees] = useContext(EmployeeContext)

    const handleClose = () =>{
        setOpen(false)
    }   
    const handleOpen = () =>{
        setOpen(true)
    }
    const {register, handleSubmit, reset, formState:{errors}} = useForm()

    const onSubmit = ({firstName, lastName, position, address}, e) =>{
        setEmployees(prevMovies => [...prevMovies, 
            {
                firstName : firstName, lastName : lastName, 
                status: "Active", 
                position: position, emp_id : `${new Date().valueOf()}`, 
                address : address
            }])
            
            reset({})
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
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">

                        <div>
                        <TextField type="text" variant="outlined" {...register("firstName")} label="First Name" />
                        <p className={classes.message}>{errors.firstName && errors.firstName.message}</p>
                        </div>

                        <div>
                        <TextField type="text" variant="outlined" {...register("lastName")} label="Last Name" />
                        <p className={classes.message}>{errors.lastName && errors.lastName.message}</p>
                        </div>

                        <div>
                        <TextField type="text" variant="outlined" {...register("position")} label="Position" />
                        <p className={classes.message}>{errors.position && errors.position.message}</p>
                        </div>

                        <div>
                        <TextField type="text" variant="outlined" {...register("address")} label="Address" placeholder="city, country"/>
                        <p className={classes.message}>{errors.address && errors.address.message}</p>
                        </div>     
                        <Button type="submit">Add</Button>
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
