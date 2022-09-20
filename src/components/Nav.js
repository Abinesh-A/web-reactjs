import React, { useEffect, useState } from "react";
import "../styles/nav.css";

function Nav() {
  const[show,setShow]=useState(true)
  const [issquare, setIssquare] = useState(window.innerWidth < 900);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const issquares = window.innerWidth < 900;
        if (issquares !== issquare) setIssquare(issquares);
      },
      false
    );
  });
  return (
    <>
      <div className={show? "sidebar": "sidebar active"}>
        <div className="logo">
          <i class='bx bxs-star-half' ></i>
        </div>
        <div className={show? "toggle-btn": "toggle-btn active"} onClick={()=>setShow(!show)}>
          <i className="bx bx-chevron-right" id="btn"></i>
        </div>
        <div className="menu">
          <div>
            <div className="menu-icon">
              <i className="bx bx-grid-alt"></i>
              <span className="menu-name">
              ABOUT
            </span>
            </div>
          </div>
          <div>
            <div className="menu-icon">
              <i className="bx bx-notepad"></i>
              <span className="menu-name">WORK</span>
            </div>
          </div>
        </div>
        <div className="contact">
            <div>
              <a className="menu-icon2 lin" href="https://www.linkedin.com/in/mr-abi-3aa684183">
                <i className="bx bxl-linkedin"></i>
                <span className="menu-name">
              LinkedIn
            </span>
            </a>
            </div>
            <div >
              <a className="menu-icon2 insta" href="https://instagram.com/mr_abinesh_?utm_medium=copy_link">
                <i className="bx bxl-instagram"></i>
                <span className="menu-name">
              Instagram
            </span>
            </a>
            </div>
            <div>
              <a href={() => false} className="menu-icon2 js-textareacopybtn mail">
                <i className="bx bx-mail-send"></i>
                <span className="menu-name">
              Email
            </span>
            </a>
            </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
