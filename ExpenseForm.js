import React, { useEffect, useRef, useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = () => {
    const expenseAmountInputRef=useRef();
    const descriptionInputRef=useRef();
    const categorySelectRef=useRef();
    const [userData,setUserData]=useState([]);
   
   const expenseSubmitHandler=(event)=>{
    event.preventDefault();
    const enteredExpenseAmount=expenseAmountInputRef.current.value;
    const enteredDescription=descriptionInputRef.current.value;
    const enteredCategory=categorySelectRef.current.value;
    console.log(enteredExpenseAmount+" "+enteredDescription+" "+enteredCategory);
    const newEntry = {
        expenseamount: enteredExpenseAmount,
        description: enteredDescription,
        category: enteredCategory,
      };
      setUserData((predata)=>[...predata,newEntry]);
    
      expenseAmountInputRef.current.value = '';
    descriptionInputRef.current.value = '';
    categorySelectRef.current.value = '';
    }
   
    console.log(userData);
  return (
    <div>

    <form className='expenseform'>
        <h4>ADD YOUR EXPENSE</h4>
      <label htmlFor="expenseAmount">Expense Amount</label>
      <input type="digit" ref={expenseAmountInputRef}/>
      <label htmlFor="description">Description</label>
      <input type="text" ref={descriptionInputRef}/>
     
      <label for="cars">Category</label>

<select name="category" id="category" className='input' ref={categorySelectRef}>
  <option value="Food">Food</option>
  <option value="Petrol">Petrol</option>
  <option value="Travelling">Travelling</option>
  <option value="Other">Salary</option>
</select>
<br />
<button className='submitbutton' onClick={expenseSubmitHandler}>Submit</button>
    </form>
   
  <table className='table mt-4'>
  <thead class="thead-light">
    <tr>
      <th scope="col"></th>
      <th scope="col">Expense Amount</th>
      <th scope="col">Description</th>
      <th scope="col">Quantity</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {userData.map((entry, index) => (
          <tr key={index}>
          <th scope="row">{index+1}</th>
          <td>{entry.expenseamount}</td>
          <td>{entry.description}</td>
          <td>{entry.category}</td>
          <td><button className='deletebutton'>Delete</button></td>
        </tr>
    ))
    }
  </tbody>
  </table>
</div>
  )
}

export default ExpenseForm
