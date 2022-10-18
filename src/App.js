import React, { useRef } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Page3 } from "./components/Page3";
import { Page4 } from "./components/Page4";

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const skill = useRef(null);
  const project = useRef(null);
  const gotoHome = () => {
    window.scrollTo({
      top: home.current.scrollIntoView({ behavior: "smooth" }),
    });
  };
  const gotoAbout = () => {
    window.scrollTo({
      top: about.current.scrollIntoView({ behavior: "smooth" }),
    });
  };
  const gotoSkill = () => {
    window.scrollTo({
      top: skill.current.scrollIntoView({ behavior: "smooth" }),
    });
  };
  const gotoProject = () => {
    window.scrollTo({
      top: project.current.scrollIntoView({ behavior: "smooth" }),
    });
  };
  return (
    <div className="App">
      {/* <header className="header"> */}
      <div className="navdiv">
        <Nav
          gotoHome={gotoHome}
          gotoAbout={gotoAbout}
          gotoSkill={gotoSkill}
          gotoProject={gotoProject}
        />
      </div>
      <div className="contentdiv">
        <div className="d-flex flex-column">
          <Page1 home={home} />
          <Page2 about={about} />
          <Page3 skill={skill} />
          <Page4 project={project} />
        </div>
      </div>
      {/* <div className="d-flex flex-column bg-primary">hay</div> */}
      {/* </header> */}
    </div>
  );
}

export default App;
