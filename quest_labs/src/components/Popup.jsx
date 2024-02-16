import React, { useState } from "react";

function Popup() {
  const [showw, setshoww] = useState(false);

  const handle_cross = () => {
    setshoww(!showw); 
  };

  return (
    <div className={"popup"}>
      <div  className={showw ? "main_cont" : "cross"}>
        <p onClick={handle_cross}>❌</p>
        <img
          className="img1"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReu-y6yVKg3OHBaa06_lS_lGzKl7NBohDG3A&usqp=CAU"
          alt=""
        />
        <div className="bad_unlock">
          <h2>Badge Unclocked</h2>
          <img
            className="img2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReu-y6yVKg3OHBaa06_lS_lGzKl7NBohDG3A&usqp=CAU"
            alt=""
          />
        </div>
        <p>Level Up Earned a Shiny new badge</p>
      </div>
    </div>
  );
}

export default Popup;
