import React, { useRef } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Page3 } from "./components/Page3";
import { Page4 } from "./components/Page4";

function App() {
  const about = useRef(null);
  const work = useRef(null);
  const gotoAbout = () => {
    window.scrollTo({ top: about.current.scrollIntoView({behavior: 'smooth'})});
  };
  const gotoWork =()=>{
    window.scrollTo({ top: work.current.scrollIntoView({behavior: 'smooth'})});
  }
  return (
    <div className="App">
      {/* <header className="header"> */}
      <div className="navdiv">
        <Nav gotoAbout={gotoAbout} gotoWork={gotoWork} />
      </div>
      <div className="contentdiv">
        <div className="d-flex flex-column">
          <Page1 />
          <Page2 about={about}/>
          <Page3 />
          <Page4 work={work} />
        </div>
      </div>
      {/* <div className="d-flex flex-column bg-primary">hay</div> */}
      {/* </header> */}
    </div>
  );
}

export default App;
