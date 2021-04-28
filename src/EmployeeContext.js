import React, {useState, createContext} from 'react'

export const EmployeeContext = createContext();

export const MovieProvider = (props) =>{
    const [employees, setEmployees] = useState([
        {
            firstName : 'Harry',
            lastName : 'Potter',
            address : 'London, England',
            status : 'Active',
            position: 'Wizard',
            emp_id: '1619592682480'
        },
        {
            firstName : 'James',
            lastName : 'Amsterdam',
            address : 'Los Angles, USA',
            status : 'Active',
            position : 'Encoder',
            emp_id: '1619592682481'
        },
        {
            firstName : 'Michael',
            lastName : 'San Juan',
            address : 'Manila, Philippines',
            status : 'Active',
            position: 'Data Analyst',
            emp_id: '1619592682679'
        }
    ])

    return(
        <EmployeeContext.Provider value ={[employees, setEmployees]}>
            {props.children}
        </EmployeeContext.Provider>
    )

}