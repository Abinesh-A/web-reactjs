import React from "react";
import "../styles/page1.css";
import test from "../components/test.png";

export const Page1 = ({ home }) => {
  return (
    <>
      <div ref={home} className="page1div">
        <div className="center">
          <div className="design">
            <div className="des">
              <p>D E S</p>
            </div>
          </div>
          <div className="text">
            <div className="toptext">Interaction Design Work</div>
            <hr></hr>
            <div className="bottomtext">Graphic Designs WORK</div>
          </div>
          <div className="ign">
            <p>
              I<span id="space"></span> G N
            </p>
          </div>
        </div>
        <div>
          <img className="imgs" alt="img" src={test}></img>
        </div>
      </div>
      <div>
        <h1>ABOUT ME</h1>
      </div>
    </>
  );
};
