import ExpenseItem from "../ExpenseItem"

const ExpenseList = () => {

    const expenses = [
        { id: 1231232, name: 'Shopping', cost: 50 },
        { id: 1231232, name: 'Holiday', cost: 50 },
        { id: 1231232, name: 'Transportation', cost: 50 },
        { id: 1231232, name: 'Fuel', cost: 50 },
        { id: 1231232, name: 'Child Care', cost: 50 },
    ]

    return (
        <ul className="list-group">
            {expenses.map(expense =>
                <ExpenseItem
                    id={expense.id}
                    name={expense.name}
                    cost={expense.cost}
                />)}
        </ul>
    )
}
export default ExpenseList