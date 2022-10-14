import './App.css';
import {useState, useEffect, useRef} from 'react'
import Video from './video.mp4'

function App() {

  const [toggle, setToggle] = useState(false);

  const ref = useRef();

  console.log(ref);

  useEffect(() => {
    console.log(ref.current);
  }, [])

  const toggleFunc = () => {
    setToggle(!toggle);
  }

  return (
    <div className="App">
      <video ref={ref} width="750" height="500" autoPlay controls muted>
        <source src={Video} type='video/mp4'/>
      </video>
      
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
