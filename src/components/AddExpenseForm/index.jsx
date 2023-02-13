import { useState, useContext } from "react"
import { AppContext } from "../../AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext)
    const [name,setName] = useState('');
    const [cost,setCost] = useState('');

    const onSubmit = event=>{
        
        event.preventDefault();
        
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        })
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label for='name'>Gasto</label>
                    <input
                        required='required'
                        type='text'
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={event=>setName(event.target.value)}>
                    </input>
                </div>
                <div className="col-sm">
                    <label for='cost'>Valor</label>
                    <input
                        required='required'
                        type='text'
                        className="form-control"
                        id="cost"
                        value={cost}
                        onChange={event=>setCost(event.target.value)}>
                    </input>
                </div>
                <div className="col-sm">
                    <button type="submit" className="btn btn-primary">Adicionar</button>
                </div>
            </div>
        </form>
    )
}
export default AddExpenseForm