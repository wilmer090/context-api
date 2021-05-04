import React, {useState} from 'react'
import EmployeeList from './EmployeeList'
import AddEmployeeModal from './AddEmployeeModalBtn'
import Navbar from './Navbar'

export const Home = () => {
    return (
        <>
          <Navbar />
          <AddEmployeeModal />
          <EmployeeList />
        </>
    )
}
