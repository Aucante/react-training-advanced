import './App.css';
import {useState, useEffect} from 'react'

function App() {

const [dataComponent, setDataComponent] = useState(1);

useEffect(() => {
  console.log("1 ch");
}, [dataComponent])

const changestate = () => {
  setDataComponent(dataComponent + 1);
}

  return (
    <div className="App">
      <h1>Le state est {dataComponent}</h1>
      <button onClick={changestate}>Change state</button>
    </div>
  );
}

export default App;
