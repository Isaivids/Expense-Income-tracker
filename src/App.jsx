import React from 'react';
import Header from './components/Header';
import InputPanel from './components/InputPanel';
import ListTransaction from './components/ListTransaction';
import IncomeArea from './components/IncomeArea';
import ExpenseArea from './components/ExpenseArea';

const App = () => {
  return (
    <div className='row m-2 d-flex justify-content-evenly align-items-center'>
      <div className='card col-md-5 ip'>
        <Header/>
        <InputPanel/>
        <ListTransaction/>
      </div>
      <div className='col-md-5 mt-sm-4 mt-md-0'>
          <div className='card inc'><IncomeArea/></div>
          <div className='card exp mt-4'><ExpenseArea/></div>
      </div>
    </div>
  )
}

export default App