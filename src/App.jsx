// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import './App.css';

const App =() => {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation/>
      <Hero/>
       
    </div>
  );
};

export default App;
