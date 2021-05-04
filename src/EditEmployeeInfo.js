import React,{useState, useContext} from 'react'
import {EmployeeContext} from './EmployeeContext'
import {Container, Button, TextField, FormControl,MenuItem, InputLabel, Select, Input, CssBaseline } from '@material-ui/core'
import {useForm} from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import NativeSelect from '@material-ui/core/NativeSelect'
import {BeatLoader} from 'react-spinners'
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles((theme) => ({
    editComponent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    },
    editform: {
      marginTop: theme.spacing(5),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: "90%"
        },
      '& .MuiButtonBase-root' : {
            width: "90%",
            marginTop: theme.spacing(2)
        },
       '& .MuiSelect-outlined' : {
             width: "100%",
        }
    },
    btnLink:{
        color: "white",
        textDecoration: "none"
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

export const EditEmployeeInfo = ({match}) => {

    const classes = useStyles()

    const {register, handleSubmit, reset, formState:{errors}} = useForm()

    const {employees, editEmployeeRecord} = useContext(EmployeeContext)
    
    const employee_info = employees.find(employee => employee.emp_id === match.params.id)

    const [isLoading, setLoading] = useState(false)

    const [selectedEmpInfo, setSelectedEmpInfo] = useState(employee_info)
    
    const history = useHistory()

    
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

    const handleChange = (e) =>{
        //setPositionData(e.target.value)
        console.log(e.target.value)
    }
    
    const onSubmit = (e) =>{
        e.preventDefault()
          let SELECTED_EMP = {}
          setLoading(true)

          setTimeout(()=>{
            try{
              
              for(const [key, value] of Object.entries(selectedEmpInfo)){
                SELECTED_EMP = {...SELECTED_EMP, [key] : value.toUpperCase()}
              }

            }catch(e){
              //console.log(e)
            }
            
            editEmployeeRecord(SELECTED_EMP)
            setLoading(false)
            history.push("/")
          },3000)
          
         
       
      
    }
    
    const handleData = (e) =>{
       setSelectedEmpInfo({...selectedEmpInfo, [e.target.name] : e.target.value})
    }
    return (
      <>
      <CssBaseline />

       <Navbar />

       <Container className={classes.editComponent}>

        <form onSubmit={onSubmit} className={classes.editform} autoComplete="off">
        
        <TextField type="text" onChange={handleData} variant="outlined" name="firstName" value={selectedEmpInfo.firstName} />
    
        <TextField type="text" onChange={handleData} variant="outlined" name="lastName" value={selectedEmpInfo.lastName} />
    
        <TextField type="text" onChange={handleData} variant="outlined" name="address" value={selectedEmpInfo.address} />
         
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-name-label">Position</InputLabel>
          <NativeSelect
          // labelId="demo-mutiple-name-label" id="demo-mutiple-name"
          disabled
          name="position"
          value={selectedEmpInfo.position} onClick={handleData}
          // input={<Input />} MenuProps={MenuProps}
          variant="outlined" {...register("position", {required : "Please fill up this field"})}>
           <option aria-label="None" value="" />
           <option value="FRONTEND">Front-end</option>
           <option value="BACKEND">Back-end</option>
           <option value="CS">CS</option>
           <option value="CONTENT WRITER">Content writer</option>
           <option value="ENCODER">Encoder</option>
        </NativeSelect>
        </FormControl>
    
        <Button type="submit" variant="contained" color="primary" startIcon={<SaveIcon/>}>
          {(isLoading)? <BeatLoader color='#fff'/> : 'Update'}
        </Button>
        <Button variant="contained" color="secondary" startIcon={<CloseIcon/>}><Link to="/" className={classes.btnLink}>Cancel</Link></Button>
      </form>
      
      </Container>
    </>
    )
}
// helperText={errors.position && errors.position.message}