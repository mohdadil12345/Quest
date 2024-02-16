import React, { useState } from "react";

function Popup({badge4, badge7, close}) {
  const [showw, setshoww] = useState(true);

  const handle_cross = () => {
 
     close()

  };

  return (
    <div  className={showw ? "popup" : "cross"}>
      <div  className={"main_cont"}>
        <p className="close" onClick={handle_cross}>❌</p>
        <img
          className="img1"
          src={badge4}
          alt=""
        />
        <div className="bad_unlock">
          <h2>Badge Unclocked</h2>
          <img
            className="img2"
            src={badge7}
            alt=""
          />
        </div>
        <div className="badg7">

        <img
            className="img2"
            src={badge4}
            alt=""
            />
        <p>Level Up Earned a Shiny new badge</p>
        <img
            className="img2"
            src={badge7}
            alt=""
            />
            </div>
      </div>
    </div>
  );
}

export default Popup;
