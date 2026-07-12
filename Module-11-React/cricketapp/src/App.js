import './App.css';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  const flag = true;

  let component;
  if (flag) {
    component = <ListofPlayers />;
  } else {
    component = <IndianPlayers />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cricket App</h1>
      </header>
      {component}
    </div>
  );
}

export default App;