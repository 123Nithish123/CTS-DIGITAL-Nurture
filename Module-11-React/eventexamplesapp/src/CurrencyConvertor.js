import { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);

  const convert = (e) => {
    e.preventDefault();
    const result = parseFloat(rupees) / 83.5;
    setEuro(result.toFixed(2));
  };

  return (
    <div>
      <form onSubmit={convert}>
        <label>Indian Rupees: </label>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter amount in INR"
        />
        <button type="submit">Convert</button>
      </form>
      {euro !== null && (
        <p className="result">Euro: {euro} EUR</p>
      )}
    </div>
  );
}

export default CurrencyConvertor;