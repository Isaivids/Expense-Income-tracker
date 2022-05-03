import React, {useContext, useState} from 'react'
import { IETracker } from '../context/context';
import { TiDelete, TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

const ListTransaction = () => {

const {deleteTransaction, transactions} = useContext(IETracker);
const [search, setSearch] = useState('')

  return (
    <div className='d-grid'>
      <div className='input-group my-3'>
      <input className='form-control' type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search a transaction'/>
      </div> 
      <div className='list-tx'>
        {transactions && transactions.filter(tx => tx.reason.toLowerCase().includes(search.toLowerCase()))
         .map((tx)=>{
            return(
                <div key={tx.id} className="list-group my-2">
                  <div className='list-group-item d-flex justify-content-center align-items-center'>
                    <div className='col-2'>
                      {tx.type === "Expense"? <TiArrowSortedDown className='text-danger fs-2'/> : <TiArrowSortedUp className='fs-2 text-success'/>}
                    </div>
                    <div className='d-grid col-7'>
                    <span>{tx.reason}-{tx.category}</span>
                    <span>{tx.date}</span>
                    </div>
                    <p className='col-2'>&#8377; {tx.amount}</p>
                  <TiDelete onClick={()=>deleteTransaction(tx.id)} className="col-1"/>
                  </div>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default ListTransaction