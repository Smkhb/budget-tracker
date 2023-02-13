import { AppContext } from "../../AppContext"
import { useContext } from "react";
const ExpenseTotal = ()=>{
    const { expenses } = useContext(AppContext)

    const totalExpenses = expenses.reduce((total,item)=>{
        return (total+=item.cost)
    },0)
    return (
        <div className="alert alert-primary">
            <span>Gastos: R${totalExpenses}</span>
        </div>
    )
}
export default ExpenseTotal