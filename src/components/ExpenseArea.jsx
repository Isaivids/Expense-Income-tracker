import React,{useContext} from 'react';
import { IETracker } from '../context/context';

const Expense = () => {


const {expenseBalance} = useContext(IETracker);

  return (
    <div>Expense : &#8377; {expenseBalance}</div>
  )
}

export default Expense

// import React, {useContext} from 'react';
// import { IETracker } from '../context/context';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [2, 11, 3, 5, 2, 3],
//       backgroundColor: [
//         'red',
//         'blue',
//         'yellow',
//         'green',
//         'purple',
//         'orange',
//       ],
//       borderWidth: 0
//     },
//   ],
// };

// function ExpenseArea() {

//   const {expenseBalance,transactions} = useContext(IETracker);

//   return (
//     <div>
//     <div>Expense : &#8377; {expenseBalance}</div>
//     <Doughnut data={data} className="dough"/>
//     </div>
//   );
// }

// export default ExpenseArea