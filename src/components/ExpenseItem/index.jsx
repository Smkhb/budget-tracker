import { TiDelete } from 'react-icons/ti'
const ExpenseItem = (props)=>{
    return (
        <li className="list-group-item d-flex justify-content-between align-itens-center">
            {props.name}
            <div>
                <span className="badge badge-primary badge-pill mr-3">
                    R${props.cost}
                </span>
                <TiDelete size='1.5em'></TiDelete>
            </div>
        </li>
    )
}
export default ExpenseItem