import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'name':
        return value.length < 5 ? 'Name must have at least 5 characters' : '';
      case 'email':
        if (!value.includes('@')) return 'Email must contain @';
        if (!value.includes('.')) return 'Email must contain .';
        return '';
      case 'password':
        return value.length < 8 ? 'Password must have at least 8 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach(field => {
      newErrors[field] = validateField(field, formData[field]);
    });
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (!hasErrors) {
      setSubmitted(true);
      alert(`Registration Successful!\nName: ${formData.name}\nEmail: ${formData.email}`);
      setFormData({ name: '', email: '', password: '' });
      setErrors({ name: '', email: '', password: '' });
    }
  };

  const containerStyle = { maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' };
  const labelStyle = { display: 'block', marginBottom: '5px', fontWeight: 'bold' };
  const inputStyle = { width: '100%', padding: '8px', marginBottom: '5px', boxSizing: 'border-box' };
  const errorStyle = { color: 'red', fontSize: '12px', marginBottom: '10px' };
  const buttonStyle = { width: '100%', padding: '10px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' };

  return (
    <div style={containerStyle}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={labelStyle}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter your name"
          />
          {errors.name && <span style={errorStyle}>{errors.name}</span>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={labelStyle}>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter your email"
          />
          {errors.email && <span style={errorStyle}>{errors.email}</span>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={labelStyle}>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter your password"
          />
          {errors.password && <span style={errorStyle}>{errors.password}</span>}
        </div>

        <button type="submit" style={buttonStyle}>Register</button>
      </form>

      {submitted && (
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#d4edda', border: '1px solid #c3e6cb', borderRadius: '3px' }}>
          <p>Registration completed successfully!</p>
        </div>
      )}
    </div>
  );
}

export default Register;