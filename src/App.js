import logo from './logo.svg';
import './App.css';
import BpmInstant from './Component/BpmInstant';
import { useEffect, useState } from 'react';

function App() {
  const [measurement, setMeasurement] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setMeasurement(BpmInstant);
    }, 2000);
  }, []); 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Heartrate Monitoring</h1>
        <p>
          Bienvenue sur votre moniteur de fréquence cardiaque
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <BpmInstant />
      </header>
    </div>
  );
}

export default App;
