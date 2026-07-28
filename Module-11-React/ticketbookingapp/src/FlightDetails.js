import React from 'react';

function FlightDetails() {
  const flights = [
    { id: 1, airline: 'Air India', flightNo: 'AI-302', from: 'Chennai', to: 'Mumbai', departure: '08:00 AM', arrival: '10:30 AM', price: 4500 },
    { id: 2, airline: 'IndiGo', flightNo: '6E-201', from: 'Chennai', to: 'Delhi', departure: '10:00 AM', arrival: '12:45 PM', price: 5200 },
    { id: 3, airline: 'SpiceJet', flightNo: 'SG-405', from: 'Chennai', to: 'Bangalore', departure: '02:00 PM', arrival: '03:00 PM', price: 3000 },
    { id: 4, airline: 'Vistara', flightNo: 'UK-810', from: 'Chennai', to: 'Kolkata', departure: '06:00 PM', arrival: '08:30 PM', price: 6000 },
  ];

  return (
    <div>
      <h2>Flight Details</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Airline</th>
            <th>Flight No</th>
            <th>From</th>
            <th>To</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Price (INR)</th>
          </tr>
        </thead>
        <tbody>
          {flights.map(flight => (
            <tr key={flight.id}>
              <td>{flight.airline}</td>
              <td>{flight.flightNo}</td>
              <td>{flight.from}</td>
              <td>{flight.to}</td>
              <td>{flight.departure}</td>
              <td>{flight.arrival}</td>
              <td>{flight.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FlightDetails;