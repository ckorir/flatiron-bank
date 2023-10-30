import React, { useEffect, useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionTable from './components/TransactionTable';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch data from the local JSON DB server
  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addTransaction = (newTransaction) => {
    // Add the new transaction to your state or perform any other necessary actions.
    // You can update the transactions array in your state.
    setTransactions([...transactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Bank Transactions</h1>
      <input
        type="text"
        placeholder="Search transactions"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );

}
export default App;

