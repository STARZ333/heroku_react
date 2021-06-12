import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';
import React,{ useEffect }from "react";

  
function App() {
  useEffect(() => {
    ReactGA.initialize('UA-193151170-1');
    // To Report Page View 
    ReactGA.pageview('/');
  }, [])

  useEffect(() => {
   console.log(window.location.pathname)
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
