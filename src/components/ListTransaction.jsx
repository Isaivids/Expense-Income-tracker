import React, {useContext, useState} from 'react'
import { IETracker } from '../context/context'

const ListTransaction = () => {

const {deleteTransaction, transactions} = useContext(IETracker);
const [search, setSearch] = useState('')

  return (
    <div>
      <input type="search" placeholder='search a transaction' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        {transactions && transactions.filter(tx => tx.reason.toLowerCase().includes(search.toLowerCase()))
         .map((tx)=>{
            return(
                <div key={tx.id}>
                  <p>{tx.reason}-{tx.amount}-{tx.date}</p>
                  <button onClick={()=>deleteTransaction(tx.id)}>Delete</button>
                </div>
            )
        })}
    </div>
  )
}

export default ListTransaction