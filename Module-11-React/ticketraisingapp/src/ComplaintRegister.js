import React, { useState } from 'react';

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState('');
  const [complaint, setComplaint] = useState('');
  const [complaints, setComplaints] = useState([]);

  const generateReferenceNumber = () => {
    const prefix = 'CMP';
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `${prefix}-${timestamp}-${random}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employeeName.trim() || !complaint.trim()) {
      alert('Please fill in all fields');
      return;
    }

    const referenceNumber = generateReferenceNumber();

    const newComplaint = {
      referenceNumber,
      employeeName,
      complaint,
      date: new Date().toLocaleString(),
    };

    setComplaints([...complaints, newComplaint]);

    alert(`Complaint registered successfully!\n\nReference Number: ${referenceNumber}\nEmployee Name: ${employeeName}\n\nPlease save this reference number for follow-ups.`);

    setEmployeeName('');
    setComplaint('');
  };

  const containerStyle = { maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' };
  const labelStyle = { display: 'block', marginBottom: '5px', fontWeight: 'bold' };
  const inputStyle = { width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box' };
  const buttonStyle = { width: '100%', padding: '10px', backgroundColor: '#27ae60', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' };

  return (
    <div style={containerStyle}>
      <h2>Complaint Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={labelStyle}>Employee Name:</label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            style={inputStyle}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label style={labelStyle}>Complaint:</label>
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            style={{ ...inputStyle, height: '100px' }}
            placeholder="Describe your complaint"
          />
        </div>
        <button type="submit" style={buttonStyle}>Submit Complaint</button>
      </form>

      {complaints.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Complaint History</h3>
          <table border="1" cellPadding="8" cellSpacing="0" style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Reference No</th>
                <th>Employee Name</th>
                <th>Complaint</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((item, index) => (
                <tr key={index}>
                  <td>{item.referenceNumber}</td>
                  <td>{item.employeeName}</td>
                  <td>{item.complaint}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ComplaintRegister;