import { createContext, useReducer } from "react"

const AppReducer = (state, action)=>{
    switch(action.type){
        default:
            return state
    }
}

const initialState = {
    budget:3000,
    expenses: [
        {id:12,name: 'shopping',cost: 40},
        {id:13,name: 'holiday',cost: 60},
        {id:14,name: 'fuel',cost: 100},
    ]
}

export const AppContext = createContext();

export const AppProvider = (props)=>{
    const [state,dispatch] = useReducer(AppReducer, initialState)

    return(<AppContext.Provider value={{
        budget:state.budget,
        expenses:state.expenses,
        dispatch,
        }}>
            {props.children}
        </AppContext.Provider>)
}