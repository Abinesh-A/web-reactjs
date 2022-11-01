import React, { useEffect, useState } from "react";
import "../styles/resnav.css";

function ResNav({ gotoHome, gotoAbout, gotoSkill, gotoProject }) {
  const [ismobile, setIsmobile] = useState(window.innerWidth < 730);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const current_width = window.innerWidth < 730;
        if (current_width !== ismobile) setIsmobile(current_width);
      },
      false
    );
  });
  // if (ismobile) {
  //   require("../styles/ResNav.css");
  // } else {
  //   require("../styles/nav.css");
  // }

  return (
    <div className="navbar">
      <div onClick={gotoHome}>
        <img
          className="rlogo"
          alt="logo"
          src="data:image/png;base64,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"
        ></img>
      </div>
      <div>
        <div className="rmenu">
          <div onClick={gotoAbout}>
            <div className="rmenu-icon">
              <i className="bx bx-notepad"></i>
              {/* <span className="menu-name">ABOUT</span> */}
            </div>
          </div>
          <div onClick={gotoSkill}>
            <div className="rmenu-icon">
              <i class="bx bx-bar-chart-alt-2"></i>
              {/* <span className="menu-name">SKILL</span> */}
            </div>
          </div>
          <div onClick={gotoProject}>
            <div className="rmenu-icon">
              <i class="bx bx-category"></i>
              {/* <span className="menu-name">PROJECT</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResNav;
