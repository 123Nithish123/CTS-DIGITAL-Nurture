import './Stylesheets/mystyle.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Management Portal</h1>
        <p>Score Calculator</p>
      </header>
      <CalculateScore 
        Name="John Doe" 
        School="Springfield High" 
        Total={450} 
        goal={500} 
      />
    </div>
  );
}

export default App;