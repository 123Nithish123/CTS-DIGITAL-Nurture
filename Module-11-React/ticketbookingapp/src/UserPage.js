import React, { useState } from 'react';
import FlightDetails from './FlightDetails';

function UserPage() {
  const [bookedFlights, setBookedFlights] = useState([]);
  const [passengerName, setPassengerName] = useState('');
  const [selectedFlight, setSelectedFlight] = useState('');
  const [showBooking, setShowBooking] = useState(false);

  const flights = [
    { id: 1, airline: 'Air India', flightNo: 'AI-302', from: 'Chennai', to: 'Mumbai', departure: '08:00 AM', arrival: '10:30 AM', price: 4500 },
    { id: 2, airline: 'IndiGo', flightNo: '6E-201', from: 'Chennai', to: 'Delhi', departure: '10:00 AM', arrival: '12:45 PM', price: 5200 },
    { id: 3, airline: 'SpiceJet', flightNo: 'SG-405', from: 'Chennai', to: 'Bangalore', departure: '02:00 PM', arrival: '03:00 PM', price: 3000 },
    { id: 4, airline: 'Vistara', flightNo: 'UK-810', from: 'Chennai', to: 'Kolkata', departure: '06:00 PM', arrival: '08:30 PM', price: 6000 },
  ];

  const handleBook = (e) => {
    e.preventDefault();
    if (!passengerName || !selectedFlight) {
      alert('Please fill in all fields');
      return;
    }
    const flight = flights.find(f => f.flightNo === selectedFlight);
    const booking = {
      passengerName,
      flightNo: flight.flightNo,
      airline: flight.airline,
      from: flight.from,
      to: flight.to,
      price: flight.price,
    };
    setBookedFlights([...bookedFlights, booking]);
    alert(`Ticket booked successfully!\nPassenger: ${passengerName}\nFlight: ${flight.flightNo} (${flight.airline})\nRoute: ${flight.from} â†’ ${flight.to}\nPrice: â‚¹${flight.price}`);
    setPassengerName('');
    setSelectedFlight('');
    setShowBooking(false);
  };

  return (
    <div>
      <h2>Welcome, Logged In User!</h2>
      <p>You can browse and book flight tickets below.</p>
      <button onClick={() => setShowBooking(!showBooking)}>
        {showBooking ? 'Hide Booking Form' : 'Book a Ticket'}
      </button>

      {showBooking && (
        <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h3>Book Your Ticket</h3>
          <form onSubmit={handleBook}>
            <div style={{ marginBottom: '10px' }}>
              <label>Passenger Name: </label>
              <input
                type="text"
                value={passengerName}
                onChange={(e) => setPassengerName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>Select Flight: </label>
              <select value={selectedFlight} onChange={(e) => setSelectedFlight(e.target.value)}>
                <option value="">-- Select Flight --</option>
                {flights.map(flight => (
                  <option key={flight.id} value={flight.flightNo}>
                    {flight.flightNo} - {flight.airline} ({flight.from} â†’ {flight.to}) - â‚¹{flight.price}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit">Confirm Booking</button>
          </form>
        </div>
      )}

      <FlightDetails />

      {bookedFlights.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>My Bookings</h3>
          <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
              <tr>
                <th>Passenger</th>
                <th>Flight No</th>
                <th>Airline</th>
                <th>From</th>
                <th>To</th>
                <th>Price (INR)</th>
              </tr>
            </thead>
            <tbody>
              {bookedFlights.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.passengerName}</td>
                  <td>{booking.flightNo}</td>
                  <td>{booking.airline}</td>
                  <td>{booking.from}</td>
                  <td>{booking.to}</td>
                  <td>{booking.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UserPage;