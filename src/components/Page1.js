import React from "react";
import "../styles/page1.css";

export const Page1 = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center page1div">
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
          <div>
            {/* <h1>HELLO,</h1><br />
            <h1>I AM ABINESH</h1> */}
            <div class="intro">
              <div class="hello">
                Hell<span id="o">o</span>,
              </div>
              <div class="iam">
                <h1>I am MrABi</h1>
              </div>
              <button class="hire">B.E / ECE &#128526;</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
