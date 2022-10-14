import './App.css';
import {useState, useEffect, useRef} from 'react'
import Video from './video.mp4'

function App() {

  const [toggle, setToggle] = useState(false);

  const ref = useRef([]);

  useEffect(() => {
    window.addEventListener('resize', actionResize);

    function actionResize(){
      console.log("Resized");
    }

    return () => {
      window.removeEventListener('resize', actionResize)
    }
  }, [])
  

  const toggleFunc = () => {
    setToggle(!toggle);
  }

  const addToRef = el => {
    if(el && !ref.current.includes(el)){
      ref.current.push(el);
    }
  }

  return (
    <div className="App">
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} type='video/mp4'/>
      </video>
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} type='video/mp4'/>
      </video>
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} type='video/mp4'/>
      </video>
      
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
