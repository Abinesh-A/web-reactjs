import "./App.css";
import Nav from "./components/Nav";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Page3 } from "./components/Page3";
import { Page4 } from "./components/Page4";

function App() {
  return (
    <div className="App">
      {/* <header className="header"> */}
      <div className="navdiv">
        <Nav />
      </div>
      <div className="contentdiv">
        <div className="d-flex flex-column">
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
        </div>
      </div>
<div className="d-flex flex-column bg-primary">
  hay
</div>
      {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      {/* </header> */}
    </div>
  );
}

export default App;
