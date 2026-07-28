import { useState } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const [clickMsg, setClickMsg] = useState('');

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    setMessage('Hello! This is a static message.');
  };

  const increaseMultiple = () => {
    increment();
    sayHello();
  };

  const sayWelcome = (msg) => {
    setMessage(msg);
  };

  const onPress = (e) => {
    setClickMsg('I was clicked');
  };

  return (
    <div className="App">
      <h1>Event Examples App</h1>

      <h2>Counter</h2>
      <p className="counter-value">Count: <strong>{count}</strong></p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increaseMultiple}>Increase</button>

      {message && <p className="message">{message}</p>}

      <h2>Say Welcome</h2>
      <button onClick={() => sayWelcome('welcome')}>Say Welcome</button>

      <h2>Synthetic Event - OnPress</h2>
      <button onClick={onPress}>OnPress</button>
      {clickMsg && <p className="message">{clickMsg}</p>}

      <h2>Currency Converter - INR to Euro</h2>
      <CurrencyConvertor />
    </div>
  );
}

export default App;