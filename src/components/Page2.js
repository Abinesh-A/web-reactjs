import React from "react";
import "../styles/page2.css";
export const Page2 = ({ about }) => {
  return (
    <div className="page2div" ref={about}>
      <div className="aboutdiv">
        {/* <div className="about_h">
          ABOUT ME
        </div> */}
        <div class="about_h">
          <h1>
            ABOUT ME<span>HELLO I AM ABINESH</span>
          </h1>
          <div class="container">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
          </div>
        </div>
        <div className="about_t">
          In my younger and more vulnerable years my father gave me some advice
          that I've been turning over in my mind ever since. 'Whenever you feel
          like criticizing anyone,' he told me, 'just remember that all the
          people in this world haven't had the advantages that you've had.'
        </div>
      </div>
    </div>
  );
};
