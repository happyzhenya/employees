 import EmployeesListItems from "../employer-list-item/employer-list-item"
import './employers-list.css'
 const EmployersList =({data})=>{

    const elements=data.map(item=>{
        return (
            <EmployeesListItems {...item} />
        )
    })

    return (
        <ul className="app-list list-group">
          {elements}        
        </ul>
    )
}
export default EmployersList;