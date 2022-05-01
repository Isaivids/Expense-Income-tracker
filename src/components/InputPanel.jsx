import React, {useState, useContext} from 'react'
import { IETracker } from '../context/context'
import { v4 as uuidv4 } from 'uuid';
const initialState = {
    reason: '',
    amount: '',
    category: '',
    type: null,
    date: '',
}

const InputPanel = () => {

const [state, setState] = useState(initialState);
const {addTransaction} = useContext(IETracker);
const createTransaction = () =>{
    const transaction = {...state, amount: Number(state.amount), id: uuidv4()};
    addTransaction(transaction);
    setState(initialState);
}

  return (
    <div>
        <div value={state.type} onChange={(e)=>setState({...state, type: e.target.value})}>
            <input type="radio" value="Expense" name='type'/>Expense
            <input type="radio" value="Income" name='type'/>Income
        </div>
        <select value={state.category} onChange={(e)=>setState({...state, category: e.target.value})}>
            <option name="category" value="Business">Business</option>
            <option name="category" value="Travel">Travel</option>
            <option name="category" value="Medical">Medical</option>
            <option name="category" value="Invesments">Invesments</option>
            <option name="category" value="Gifts">Gifts</option>
            <option name="category" value="Salary">Salary</option>
            <option name="category" value="Rental Income">Rental Income</option>
            <option name="category" value="Deposits">Deposits</option>
            <option name="category" value="Others">Others</option>
        </select>
        <input type="text" value={state.reason} onChange={(e)=> setState({...state, reason : e.target.value})} placeholder="Enter Reason of Transaction"/>
        <input type="number" value={state.amount} onChange={(e)=> setState({...state, amount : e.target.value})} placeholder="Enter Amount"/>
        <input type="date" value={state.date} onChange={(e)=> setState({...state, date : e.target.value})} placeholder="Enter Date"/>
        <input type="submit" value="Submit" onClick={createTransaction}/>
    </div>
  )
}

export default InputPanel