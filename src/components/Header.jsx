import React, {useContext} from 'react'
import { IETracker } from '../context/context';
const Header = () => {

  const {balance} = useContext(IETracker);

  return (
    <div className="row text-center p-4">
        <h3 className='text-secondary'>IE Dashboard</h3>
        <h3 className='text-success'>&#8377; {balance}</h3>
    </div>
  )
}

export default Header