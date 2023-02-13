import { AppContext } from "../../AppContext";
import { useContext } from "react";
const Remaining = () =>{
    const {expenses,budget} = useContext(AppContext)

    const totalExpenses = expenses.reduce((total,item)=>{
        return (total+=item.cost)
    },0)

    const alertType = totalExpenses>budget?'alert-danger':'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>
                Caixa: R${budget-totalExpenses}
            </span>
        </div>
    )
}
export default Remaining