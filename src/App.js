import logo from './logo.svg';
import './App.css';
import BpmInstant from './Component/BpmInstant';
import LineGraph from './Component/LineGraph';
import { useEffect, useState } from 'react';

function randomBpm() {
  return Math.floor(Math.random()*100) + 70;
}

function App() {
  const [measurements, setMeasurement] = useState([50]);

  useEffect(() => {
    setInterval(() => {
      setMeasurement((prev)=>{

        //on crée un objet parce qu'une liste de valeurs pas de clé
        const obj = {
          date: new Date().getTime(),
          bpm: randomBpm(),
        }
        return [...prev, obj]
      });
    }, 2000);
  }, []); 

  const measurement = measurements[measurements.length-1];
  console.log(measurements)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Heartrate Monitoring</h1>
        <p>
          Bienvenue sur votre moniteur de fréquence cardiaque
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <BpmInstant 
        data={measurement} />
        <LineGraph data={measurements}/>
      </header>
    </div>
  );
}

export default App;
