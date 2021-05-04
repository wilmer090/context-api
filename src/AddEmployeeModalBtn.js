import React, {useState, useEffect, useContext}from 'react'
import {useForm} from 'react-hook-form'
import {Modal, Backdrop, Fade, Button, TextField, FormControl,MenuItem, InputLabel, Select, Input, ListItemText, useTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {EmployeeContext} from './EmployeeContext'
import NativeSelect from '@material-ui/core/NativeSelect';
import {BeatLoader} from 'react-spinners'
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& .MuiTextField-root' : {
          margin: theme.spacing(2)
      },
      '& .MuiButtonBase-root' : {
          width: "90%",
          marginLeft: theme.spacing(2),
          marginTop: theme.spacing(2)
      }
    },
    addbtn: {
      float: "right",
      margin: theme.spacing(3)
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
    },
    formControl: {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(2),
        minWidth: 120,
        width: "90%"
      },
      chips: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      chip: {
        margin: 2,
      },
      noLabel: {
        marginTop: theme.spacing(3),
      }
  }));


const AddEmployeeModal = () =>{

    const classes = useStyles()

    const [open, setOpen] = useState(false)

    const [isLoading, setLoading] = useState(false)
    
    const {addEmployee} = useContext(EmployeeContext)
 
    const handleClose = () =>{
        setOpen(false)
    }   
    const handleOpen = () =>{
        setOpen(true)
    }

    const [positionData, setPositionData] = useState()

    const handleChange = (e) =>{
        setPositionData(e.target.value)
    }

    const {register, handleSubmit, reset, formState:{errors}} = useForm()

    const onSubmit = (data) =>{
        data = {...data, emp_id : new Date().valueOf().toString(), status : "ACTIVE", isDeleted : false}
      
        let newObject = {}
    
        for(let [key, value] of Object.entries(data)){
            newObject[key] = (typeof value != "boolean" )? value.toUpperCase() : value
        }
       
        setLoading(true)

        setTimeout(()=>{

          addEmployee(newObject)

          reset({})

          setLoading(false)

        }, 3000)     
    }

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
            },
        },
    };

  return(
    <>
      <div>
      <Button type="button" className={classes.addbtn} onClick={handleOpen} variant="contained" color="secondary" startIcon={<AddIcon/>}>
            insert record
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
        <h2 id="transition-modal-title">Add Information</h2>
        <p id="transition-modal-description">Employee.</p>

        <div>
         <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div>
          <TextField type="text" variant="outlined" error={errors.firstName? true : false} {...register("firstName", {required : "Please fill up this field"})} label="First Name" helperText={errors.firstName && errors.firstName.message}/>
          </div>

          <div>
          <TextField type="text" variant="outlined" error={errors.lastName? true : false} {...register("lastName", {required : "Please fill up this field"})} label="Last Name" helperText={errors.lastName && errors.lastName.message}/>
          </div>

          <div>
          <TextField type="text" variant="outlined" error={errors.address? true : false} {...register("address", {required : "Please fill up this field"})} label="Address" placeholder="city, country" helperText={errors.address && errors.address.message}/>
          </div> 

        <div>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-name-label">Position</InputLabel>
            <NativeSelect
            labelId="demo-mutiple-name-label" id="demo-mutiple-name"
            value={positionData} onChange={handleChange}
            input={<Input />} MenuProps={MenuProps}
            variant="outlined" {...register("position", {required : "Please fill up this field"})}
            defaultValue={""}
           >
            <option aria-label="None" value="" />
            <option value="FRONTEND">Front-end</option>
            <option value="BACKEND">Back-end</option>
            <option value="CS">CS</option>
            <option value="CONTENT WRITER">Content writer</option>
            <option value="ENCODER">Encoder</option>
          </NativeSelect>
        </FormControl>
      
       </div>    
      <Button type="submit" variant="contained" color="primary" startIcon={<SaveIcon/>}>

        {(isLoading)? <BeatLoader color="#fff" loading={isLoading}/> :  'Save'}
        
      </Button>
    </form>
    </div>
    </div>
    </Fade>
    </Modal>
    </div>
  </>
    )
}

export default AddEmployeeModal
