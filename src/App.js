import './App.css';
import Nav from './components/Nav';
import Page1 from './components/Page1';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Nav/>
        <Page1/>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      </header>
    </div>
  );
}

export default App;
