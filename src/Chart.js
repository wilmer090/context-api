import React, {useContext} from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { EmployeeContext } from './EmployeeContext'


export const Chart = () => {

    const {employees} = useContext(EmployeeContext)
    
    const POSITION = employees.reduce((acc, employee) => {
        return {...acc, [employee.position] : (acc[employee.position] || 0 ) + 1}
    }, {})
    console.log( Object.values(POSITION))
    const options = {
        chart: {
            type: 'bar',
            zoomIn: 'xy'
        },
        title: {
            text: 'DEPARTMENT'
        },
        xAxis: {
            categories: Object.keys(POSITION),
            title:{
                text: null
            }
        },
        yAxis: {
            title: {
                text: 'NUMBER OF EMPLOYEES',
                align: 'high'
            }
        },
        series: [{
            name: "DEPARTMENT",
            data: Object.values(POSITION)
        }]
    }
    return (
        <>
          <HighchartsReact highcharts={Highcharts} options={options} />    
        </>
    )
}
