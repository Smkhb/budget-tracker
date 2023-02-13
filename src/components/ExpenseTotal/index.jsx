import { AppContext } from "../../AppContext"
import { useContext } from "react";
const ExpenseTotal = ()=>{
    const { expenses } = useContext(AppContext)

    const totalExpenses = expenses.reduce((total,item)=>{
        return (total+=item.cost)
    },0)
    return (
        <div className="alert alert-primary">
            <span>Spent so far:R$450</span>
            <span>Spent so far: R${totalExpenses}</span>
        </div>
    )
}
export default ExpenseTotal