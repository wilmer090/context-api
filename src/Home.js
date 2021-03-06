import React from 'react'
import EmployeeList from './EmployeeList'
import AddEmployeeModal from './AddEmployeeModalBtn'
import {Chart} from './Chart'
import Navbar from './Navbar'


export const Home = () => {
 
    return (
        <>
          <Navbar />
          <AddEmployeeModal />
          <EmployeeList />
          <Chart /> 
        </>
    )
}
