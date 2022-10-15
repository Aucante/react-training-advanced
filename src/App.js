import './App.css';
import {useState} from 'react'
import Video from './video.mp4'

function App() {

  const [toggle, setToggle] = useState(1);


  const toggleFunc = () => {
    setToggle(toggle + 1);
  }


  return (
    <div className="App">
      <h1>{toggle}</h1>
      
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
