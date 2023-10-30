import React, { useState } from 'react';


function TransactionForm({ onAddTransaction }) {
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    description: '',
    amount: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({
      ...newTransaction,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation and error handling here if needed
    onAddTransaction(newTransaction);
    setNewTransaction({
      date: '',
      description: '',
      amount: 0,
    });
  };

  return (
    <div>
      <h2>Add a New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="text"
            name="date"
            value={newTransaction.date}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={newTransaction.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={newTransaction.amount}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
