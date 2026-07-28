import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import EmployeesList from './components/EmployeesList';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const appStyle = {
    padding: '20px',
    backgroundColor: theme === 'light' ? '#ffffff' : '#1a1a2e',
    color: theme === 'light' ? '#000000' : '#ffffff',
    minHeight: '100vh',
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={appStyle}>
        <h1>Employee Management App</h1>
        <button onClick={toggleTheme} style={{ marginBottom: '20px', padding: '10px 20px' }}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
        <EmployeesList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;