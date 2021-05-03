export default(state, action) =>{
    switch(action.type){
        case 'ADD_EMPLOYEE' :
            return{
                employees : [action.payload, ...state.employees]
            }
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
