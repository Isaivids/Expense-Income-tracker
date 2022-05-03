import React,{useContext} from 'react';
import { IETracker } from '../context/context';

const Income = () => {

const {incomeBalance} = useContext(IETracker);

  return (
    <div>Income : &#8377; {incomeBalance}</div>
  )
}

export default Income
                