import { faArrowAltCircleUp } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useContext} from 'react';
import { IETracker } from '../context/context';

const Income = () => {

const {incomeBalance} = useContext(IETracker);

  return (
    <div className='rup' >
    <h3 className=' text-white'>Income: &#8377; {incomeBalance}</h3>
    <FontAwesomeIcon icon={faArrowAltCircleUp} className="col-12 text-white"/>
  </div>
  )
}

export default Income
                