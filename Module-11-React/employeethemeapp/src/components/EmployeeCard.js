import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';

function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext);

  const cardStyle = {
    border: '1px solid ' + (theme === 'light' ? '#ccc' : '#444'),
    borderRadius: '8px',
    padding: '15px',
    margin: '10px 0',
    backgroundColor: theme === 'light' ? '#f9f9f9' : '#16213e',
  };

  const buttonClass = theme === 'light' ? 'btn-light' : 'btn-dark';

  return (
    <div style={cardStyle}>
      <h3>{employee.name}</h3>
      <p><strong>ID:</strong> {employee.id}</p>
      <p><strong>Role:</strong> {employee.role}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <div>
        <button className={buttonClass} style={{
          padding: '8px 16px',
          marginRight: '10px',
          backgroundColor: theme === 'light' ? '#007bff' : '#e94560',
          color: '#ffffff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}>
          Edit
        </button>
        <button className={buttonClass} style={{
          padding: '8px 16px',
          backgroundColor: theme === 'light' ? '#dc3545' : '#ff6b6b',
          color: '#ffffff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default EmployeeCard;