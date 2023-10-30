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
          <input
            type="text"
            name="date"
            value={newTransaction.date}
            onChange={handleInputChange}
            placeholder="Date"
          />
        </label>
        <label>
          <input
            type="text"
            name="description"
            value={newTransaction.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
        </label>
        <label>
          <input
            type="number"
            name="amount"
            value={newTransaction.amount}
            onChange={handleInputChange}
            placeholder="Amount"
          />
        </label>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
