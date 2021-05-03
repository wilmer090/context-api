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
        firstName : 'MICHAEL',
        lastName : 'SAN JUAN',
        address : 'MANILA, PHILIPPINES',
        status : 'ACTIVE',
        position: 'DATA ANALYST',
        emp_id: '1619592682679'
    }]
}

export const EmployeeContext = createContext(initialState);

export const EmployeeProvider = (props) =>{

    const [state, dispatch] = useReducer(AppReducer, initialState)

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