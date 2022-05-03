import React, {useContext, useState} from 'react'
import { IETracker } from '../context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp, faArrowAltCircleDown, faMinusCircle } from '@fortawesome/fontawesome-free-solid'


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
                      {tx.type === "Expense"?<FontAwesomeIcon icon={faArrowAltCircleDown}  className='text-danger fs-4'/>: <FontAwesomeIcon icon={faArrowAltCircleUp}  className='text-success fs-4'/>}
                    </div>
                    <div className='d-grid col-7'>
                    <span>{tx.reason}-{tx.category}</span>
                    <span>{tx.date}</span>
                    </div>
                    <p className='col-2'>&#8377; {tx.amount}</p>
                    <FontAwesomeIcon icon={faMinusCircle} onClick={()=>deleteTransaction(tx.id)} className="col-1 fs-4" />
                  </div>
                </div>
            )
        })}
        </div>    
    </div>
  )
}

export default ListTransaction