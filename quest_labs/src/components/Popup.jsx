import React, { useState } from "react";

function Popup({badge4,show, badge7, handle_click, popupbadg}) {


  const handle_cross = () => {
 
    handle_click()

  };

  return (
    <div  className={show ? "popup" : "cross"}>
      <div  style={{position:"absolute", visibility: show ? "visible" : "hidden", transition : "top 1s",  top: show ? "170px" : "-100%"}}  className={"main_cont"}>
        <p className="close" onClick={handle_cross}>❌</p>
        <img
          className="img1"
          src={popupbadg}
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
