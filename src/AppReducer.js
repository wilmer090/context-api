export default(state, action) =>{
    switch(action.type){
        case 'ADD_EMPLOYEE' :

            // setTimeout(()=>{
                
            // },5000)
            return{
                employees : [action.payload, ...state.employees]
            }
            console.log('...loading')
          
        case 'UPDATE_RECORD' :

            const targetRecord = action.payload

            const updateEmployee = state.employees.map(employee => {

                if(employee.emp_id === targetRecord.emp_id){
                
                    return targetRecord
                }

                    return employee
                })
        
            return {
                employees: updateEmployee
            }
        case 'DELETE_EMPLOYEE' : {


                return {
                    
                    employees: state.employees.filter( employee => employee.emp_id != action.payload)
                }
        }
        default : 
            return state
    }
}
