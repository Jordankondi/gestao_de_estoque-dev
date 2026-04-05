import React, { useState } from 'react';

const Compras = () => {
  const [purchases, setPurchases] = useState([]);
  const [purchase, setPurchase] = useState('');

  const handleAddPurchase = (e) => {
    e.preventDefault();
    if (purchase) {
      setPurchases([...purchases, purchase]);
      setPurchase('');
    }
  };

  return (
    <div>
      <h1>Purchases Management</h1>
      <form onSubmit={handleAddPurchase}>
        <input
          type="text"
          value={purchase}
          onChange={(e) => setPurchase(e.target.value)}
          placeholder="Enter purchase"
          required
        />
        <button type="submit">Add Purchase</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Purchases</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Compras;