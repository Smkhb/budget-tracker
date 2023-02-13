import { useContext } from "react"
import { AppContext } from "../../context"

const Budget = ()=>{
    const {budget} = useContext(AppContext)
    return (
        <div className="alert alert-secondary">
            <span>Budget: R${budget}</span>
        </div>
    )
}
export default Budget