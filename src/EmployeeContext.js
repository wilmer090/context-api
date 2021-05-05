import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'


// initial state

const initialState = {
    employees: [{
        firstName : 'HARRY',
        lastName : 'POTTER',
        address : 'LONDON, ENGLAND',
        status : 'ACTIVE',
        position: 'BACKEND',
        emp_id: '1619592682480'
    },
    {
        firstName : 'JAMES',
        lastName : 'AMSTERDAM',
        address : 'LOS ANGLES, USA',
        status : 'ACTIVE',
        position : 'CS',
        emp_id: '1619592682481'
    },
    {
        firstName : 'JASMINE',
        lastName : 'BLOW',
        address : 'LOS ANGLES, USA',
        status : 'ACTIVE',
        position : 'FRONTEND',
        emp_id: '1619592683592'
    },
    {
        firstName : 'STEVEN',
        lastName : 'PETTERSON',
        address : 'CHICAGO, USA',
        status : 'ACTIVE',
        position : 'CS',
        emp_id: '1619592687544'
    },
    {
        firstName : 'MICHAEL',
        lastName : 'SAN JUAN',
        address : 'MANILA, PHILIPPINES',
        status : 'ACTIVE',
        position: 'DATA_ANALYST',
        emp_id: '1619592682679'
    },{
        firstName : 'ANDREW',
        lastName : 'UY',
        address : 'BINONDO, PHILIPPINES',
        status : 'ACTIVE',
        position: 'FRONTEND',
        emp_id: '1619592683784'
    }
    ]
}


export const EmployeeContext = createContext(initialState);

export const EmployeeProvider = (props) =>{

    const [state, dispatch] = useReducer(AppReducer, initialState)

   const dept =  state.employees.reduce((acc,obj) => {
       return {...acc, [obj.position] : (acc[obj.position] || 0) + 1}
   },{})

   console.log(Object.entries(dept))
   console.log(dept)
    //ACTIONS

    const addEmployee  = (employeeData) =>{
        dispatch({
            type: 'ADD_EMPLOYEE',
            payload: employeeData
        })
    }

    const editEmployeeRecord = (updatedEmployeeData) =>{
        dispatch({
            type: 'UPDATE_RECORD',
            payload: updatedEmployeeData
        })
    }

    const deleteEmployeeInfo = (id) =>{
        dispatch({
            type : "DELETE_EMPLOYEE",
            payload: id
        })
    
    }
    return(
        <EmployeeContext.Provider value ={{
          employees: state.employees,
          addEmployee,
          editEmployeeRecord,
          deleteEmployeeInfo
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )

}