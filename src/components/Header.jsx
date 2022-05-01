import React, {useContext} from 'react'
import { IETracker } from '../context/context';
const Header = () => {

  const {balance, incomeBalance,expenseBalance} = useContext(IETracker);

  return (
    <div>
        <h3>IE Dashboard</h3>
        <p><strong>Balance</strong> ${balance}</p>
        <p><strong>Income</strong> ${incomeBalance}</p>
        <p><strong>Expense</strong> ${expenseBalance}</p>
    </div>
  )
}

export default Header