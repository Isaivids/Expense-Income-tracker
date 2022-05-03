import React, {useState, useContext} from 'react'
import { IETracker } from '../context/context'
import { v4 as uuidv4 } from 'uuid';
import Expense from './Expense';
import Income from './Income';

const initialState = {
    reason: '',
    amount: '',
    category: '',
    type: '',
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
        <div className='d-flex'>
        <div value={state.type} className="col-6 d-flex justify-content-center align-items-center">
            <div className='form-check'>
            <input id='exp' className='form-check-input' type="radio" value="Expense" name='type' checked={state.type === 'Expense'} onChange={(e)=>setState({...state, type: e.target.value})}/>
            <label htmlFor='exp' className='text-danger fw-bold'>Expense</label>
            </div>
            <div className='form-check mx-2'>
            <input id='inc' className='form-check-input' type="radio" value="Income" name='type' checked={state.type === 'Income'} onChange={(e)=>setState({...state, type: e.target.value})}/>
            <label htmlFor='inc' className='text-success fw-bold'>Income</label>
            </div>
        </div>
        <div className='d-flex col-6 justify-content-center'>
            {state.type === "Expense" ? (
                <select className='input-group' value={state.category} onChange={(e)=> setState({...state, category : e.target.value})}>
                    {Expense.map((exp)=>{
                        return(<option value={exp.name} key={exp.id}>{exp.name}</option>)
                    })}
                </select>
            ) : (
                <select className='input-group' value={state.category} onChange={(e)=> setState({...state, category : e.target.value})}>
                    {Income.map((inc)=>{
                        return(<option value={inc.name} key={inc.id}>{inc.name}</option>)
                    })}
                </select>
            )}
        </div>
        </div>
        <div className="d-flex my-3 justify-content-center input-group">
            <input className="form-control" type="text" value={state.reason} onChange={(e)=> setState({...state, reason : e.target.value})} placeholder="Enter the reason"/>
        </div>
        <div className="d-flex mb-3 justify-content-center input-group">
            <input className="form-control" type="number" value={state.amount} onChange={(e)=> setState({...state, amount : e.target.value})} placeholder="Enter the amount"/>
            <input className="form-control" type="date" value={state.date} onChange={(e)=> setState({...state, date : e.target.value})} placeholder="Date"/>
        </div>
        <div className='d-flex justify-content-center'>
            <button className='btn btn-success' onClick={createTransaction}>Add Transaction</button>
        </div>
    </div>
  )
}

export default InputPanel