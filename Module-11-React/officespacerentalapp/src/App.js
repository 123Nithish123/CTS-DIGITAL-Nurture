import './App.css';

const office = {
  name: 'WeWork Premier Tower',
  rent: 55000,
  address: '12 MG Road, Bangalore, Karnataka'
};

const officeList = [
  { name: 'WeWork Premier Tower', rent: 55000, address: '12 MG Road, Bangalore, Karnataka' },
  { name: 'Regus Business Center', rent: 75000, address: '45 Anna Salai, Chennai, Tamil Nadu' },
  { name: 'Cowork Oasis', rent: 42000, address: '78 Jubilee Hills, Hyderabad, Telangana' },
  { name: 'SmartWorks Hub', rent: 90000, address: '34 Cyber City, Gurgaon, Haryana' },
  { name: 'Innov8 Co-working', rent: 60000, address: '56 Koramangala, Bangalore, Karnataka' },
  { name: 'The Office Pass', rent: 38000, address: '90 Hinjewadi, Pune, Maharashtra' }
];

function App() {
  return (
    <div className="App">
      <h1>Office Space Rental App</h1>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
          alt="Office Space"
        />
      </div>

      <h2>Featured Office Space</h2>
      <div className="office-card">
        <p><strong>Name:</strong> {office.name}</p>
        <p><strong>Rent:</strong> <span className={office.rent < 60000 ? 'rent-low' : 'rent-high'}>Rs. {office.rent}/month</span></p>
        <p><strong>Address:</strong> {office.address}</p>
      </div>

      <h2>Available Office Spaces</h2>
      <div className="office-list">
        {officeList.map((item, index) => (
          <div className="office-card" key={index}>
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Rent:</strong> <span className={item.rent < 60000 ? 'rent-low' : 'rent-high'}>Rs. {item.rent}/month</span></p>
            <p><strong>Address:</strong> {item.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;