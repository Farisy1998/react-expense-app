<<<<<<< HEAD
import './ExpenseDate.css';
import React from "react";

const ExpenseDate = (props) => {

    const month = props.date.toLocaleString("en-US", { month: "long" });
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });

    return (
      <div className="expense-date">
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
      </div>
    );

}

=======
import './ExpenseDate.css';
import React from "react";

const ExpenseDate = (props) => {

    const month = props.date.toLocaleString("en-US", { month: "long" });
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });

    return (
      <div className="expense-date">
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
      </div>
    );

}

>>>>>>> e7210b592b3c941fb5fa69ee468131427aef5346
export default ExpenseDate;