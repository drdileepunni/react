import React, { useState } from 'react';
import './App.css';

const Greeting = ({ name }) => {
  return <h2>Hello, {name || 'Guest'}! 👋</h2>;
};

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button 
      className="button"
      onClick={() => setCount(count + 1)}>Dont click Me</button>
    </div>
  );
};

const App = () => {
  const [username, setUsername] = useState('');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🎉 Welcome to React!</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <Greeting name={username} />
      <Counter />
    </div>
  );
};

export default App;
