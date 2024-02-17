import React, { useEffect, useState } from "react";
import Popup from "./Popup";
function Profile() {
  const [img, setimg] = useState("");
  const [show, setShow] = useState(true);
  const [data, setdata] = useState("");
  const [tier, settier] = useState("");
  const [badge4, setbadge4] = useState("");
  const [badge5, setbadge5] = useState("");
  const [badge7, setbadge7] = useState("");
  const [rank, setrank] = useState("");
  const [popupbadg, setpopupbadg] = useState("");

  const [activeTab, setActiveTab] = useState("Badges");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handle_click = (bd) => {
    setShow(!show);

    if (bd == 1) {
      setpopupbadg(badge4);
    } else if (bd == 2) {
      setpopupbadg(badge5);
    } else {
      setpopupbadg(badge7);
    }

  };


  const fetch_data = async () => {
    let headersList = {
      apikey: "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc",
    };

    let res = await fetch(
      "https://staging.questprotocol.xyz/api/users/u-a2399489-9cd0-4c94-ad12-568379202b08",
      {
        method: "GET",
        headers: headersList,
      }
    );

    let data = await res.json();
    setimg(data.data.imageUrl);
  };

  const fetch2 = async () => {
    let headersList = {
      apikey: "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc",
    };

    let response = await fetch(
      "https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp",
      {
        method: "GET",
        headers: headersList,
      }
    );

    let data = await response.json();
    setdata(data.data);
    settier(data.tier);
  };

  const fetch3 = async () => {
    let headersList = {
      apikey: "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc",
    };

    let response = await fetch(
      "https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp-leaderboard-rank",
      {
        method: "GET",
        headers: headersList,
      }
    );

    let data = await response.json();
    setrank(data.data.position);
  };
  const fetch4 = async () => {
    let headersList = {
      apikey: "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc",
    };

    let response = await fetch(
      "https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp-history",
      {
        method: "GET",
        headers: headersList,
      }
    );

    let data = await response.json();
  };
  const fetch5 = async () => {
    let headersList = {
      apikey: "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc",
    };

    let response = await fetch(
      "https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/badges",
      {
        method: "GET",
        headers: headersList,
      }
    );

    let data = await response.json();
    setbadge4(data.data[4].imageUrl);
    setbadge5(data.data[2].imageUrl);
    setbadge7(data.data[7].imageUrl);
    //    setbadges(data)
  };

  useEffect(() => {
    fetch_data();
    fetch2();
    fetch3();
    fetch4();
    fetch5();
  }, []);

  return (
    <div className="profile_container">
      <h1 className="profile">Profile</h1>
      {
        <Popup
          popupbadg={popupbadg}
          show={show}
          handle_click={handle_click}
          badge4={badge4}
          badge7={badge7}
        />
      }
      <div className="item">
        <div className="info">
          <img className="rich_img" src={img} alt="" />
          <h1>Rich Explorer</h1>
        </div>

        <div className="explorer">
          <div>
            <h5>{data}</h5>
            <p>Points</p>
          </div>

          <div>
            <h5>#{rank}</h5>
            <p>Rank</p>
          </div>

          <div>
            <h5>{tier}</h5>
            <p>Level</p>
          </div>
        </div>

        <div className="member">
          <p
            onClick={() => handleTabClick("Member")}
            className={activeTab === "Member" ? "active-tab" : ""}
          >
            Member
          </p>
          <p
            onClick={() => handleTabClick("Badges")}
            className={activeTab === "Badges" ? "active-tab" : ""}
          >
            Badges
          </p>
          <p
            onClick={() => handleTabClick("PointHistory")}
            className={activeTab === "PointHistory" ? "active-tab" : ""}
          >
            Point History
          </p>
        </div>
        {activeTab === "Member" && (
          <div className="member-content badges_img">
            <img onClick={() => handle_click(2)} src={badge5} alt="" />
            <img onClick={() => handle_click(1)} src={badge4} alt="" />
            <img onClick={() => handle_click(3)} src={badge7} alt="" />
          </div>
        )}

        {activeTab === "Badges" && (
          <div className="badges_img">
            <img onClick={() => handle_click(1)} src={badge4} alt="" />
            <img onClick={() => handle_click(2)} src={badge5} alt="" />
            <img onClick={() => handle_click(3)} src={badge7} alt="" />
          </div>
        )}

        {activeTab === "PointHistory" && (
          <div className="point-history-content badges_img">
            <img onClick={() => handle_click(3)} src={badge7} alt="" />
            <img onClick={() => handle_click(2)} src={badge5} alt="" />
            <img onClick={() => handle_click(1)} src={badge4} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
