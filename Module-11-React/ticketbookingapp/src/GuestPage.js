import React from 'react';
import FlightDetails from './FlightDetails';

function GuestPage() {
  return (
    <div>
      <h2>Welcome, Guest User!</h2>
      <p>You are browsing as a guest. Please login to book tickets.</p>
      <FlightDetails />
    </div>
  );
}

export default GuestPage;