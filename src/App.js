import './App.css';
import {useState, useCallback} from 'react'
import Content from './Content'

function App() {

  const [toggle, setToggle] = useState(1);


  const toggleFunc = () => {
    setToggle(toggle + 1);
  }


  return (
    <div className="App">
      <Content />
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
