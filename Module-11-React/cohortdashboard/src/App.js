import './App.css';
import CohortDetails from './CohortDetails';
import CohortData from './Cohort';

const cohorts = CohortData;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cohort Dashboard</h1>
        <p>Ongoing and Completed Cohorts</p>
      </header>
      <div className="cohorts-container">
        {cohorts.map(cohort => (
          <CohortDetails key={cohort.id} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;