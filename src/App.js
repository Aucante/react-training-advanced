import './App.css';
import {useState} from 'react'
import Content from './Content'

function App() {

  const [toggle, setToggle] = useState(1);


  const toggleFunc = () => {
    setToggle(toggle + 1);
  }


  return (
    <div className="App">
      <Content>
        <h1>Titre de mon article 1</h1>
        <p>lorem ipsum</p>
      </Content>
      <Content>
        <h1>Titre de mon article 2</h1>
        <p>lorem ipsum</p>
      </Content>
      
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
