import React, {useReducer, createContext, useEffect} from 'react'
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [];
 
export const IETracker = createContext();

export const Provider = ({children}) =>{

    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    const deleteTransaction = (id) =>{
        dispatch({type: "DELETE_TRANSACTION", payload: id});
    }

    const addTransaction = (transaction) =>{
        dispatch({type: "ADD_TRANSACTION", payload: transaction});
    }
    //current.type === "Expense" ? acc - current.amount : acc + current.amount

    const balance = transactions.reduce((acct,current)=>{
        return (current.type === 'Income' ? acct + current.amount : acct - current.amount);
    }, 0)
    const incomeBalance = transactions.reduce((acci,ib)=>{
        return (ib.type === 'Income' ?acci += ib.amount : acci);
    }, 0)
    const expenseBalance = transactions.reduce((acce,eb)=>{
        return (eb.type === 'Expense' ? acce -= eb.amount: acce);
    }, 0)

    return(
        <IETracker.Provider value={{
            deleteTransaction, addTransaction, transactions, balance,incomeBalance, expenseBalance
         }}>
            {children}
        </IETracker.Provider>
    )
}
