import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useContext} from 'react';
import { IETracker } from '../context/context';
import {  faArrowAltCircleDown } from '@fortawesome/fontawesome-free-solid'

const Expense = () => {


const {expenseBalance} = useContext(IETracker);

  return (
    <div className='rup' >
      <h3 className='col-12 text-white'>Expense: &#8377; {expenseBalance}</h3>
      <FontAwesomeIcon icon={faArrowAltCircleDown} className="col-12 text-white"/>
    </div>
  )
}

export default Expense
