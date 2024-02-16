import React, { useEffect, useState } from "react";
import Popup from "./Popup";
function Profile() {


  const [img, setimg] = useState("");
  const [show, swtshow] = useState(true)
  const [data, setdata] = useState("")
  const [tier, settier] = useState("")
  const [badge, setbadge] = useState([])

  const fetch_data = async () => {
    let headersList = {
        "apikey": "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc"
       }
       
       let res = await fetch("https://staging.questprotocol.xyz/api/users/u-a2399489-9cd0-4c94-ad12-568379202b08", { 
         method: "GET",
         headers: headersList
       });
       
       let data = await res.json();
      console.log("1", data)
       setimg(data.data.imageUrl)
       
  };



  const fetch2 = async() => {
    let headersList = {
        "apikey": "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc"
       }
       
       let response = await fetch("https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp", { 
         method: "GET",
         headers: headersList
       });
       
       let data = await response.json();
       console.log("2",data);
       setdata(data.data)
       settier(data.tier)
       
  }


  const fetch3 = async() => {
    let headersList = {
        "apikey": "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc"
       }
       
       let response = await fetch("https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp-leaderboard-rank", { 
         method: "GET",
         headers: headersList
       });
       
       let data = await response.json();
       console.log("3",data);
       
  }
  const fetch4 = async() => {
    let headersList = {
        "apikey": "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc"
       }
       
       let response = await fetch("https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp-history", { 
         method: "GET",
         headers: headersList
       });
       
       let data = await response.json();
       console.log("4",data.data);
       
  }
  const fetch5 = async() => {
    let headersList = {
        "apikey": "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc"
       }
       
       let response = await fetch("https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/badges", { 
         method: "GET",
         headers: headersList
       });
       
       let data = await response.json();
       console.log("5", data.data);
       setbadge(data.data)
    //    setbadges(data)
       
  }
  

  useEffect(() => {
    fetch_data();
    fetch2()
    fetch3()
    fetch4()
    fetch5()
  }, []);



const handle_click = () => [
    swtshow(!show)
]


  return (

    <div className="profile_container">
   
   {show && <Popup/>}
      <div className="item">
        <div className="info">
       
          <img className="rich_img"
            src={img}
            alt=""
          />
          <h1>Rich Explorer</h1>
        </div>

        <div className="explorer">
          <div>
            <h5>{data}</h5>
            <p>Points</p>
          </div>
          <div>
          <h5>{data}</h5>
            <p>Rank</p>
          </div>
          <div>
          <h5>{data}</h5>
            <p>Level</p>
          </div>
        </div>

        <div className="member">
          <button onClick={handle_click}>Member</button>
          <button onClick={handle_click}>Badges</button>
          <button onClick={handle_click}>Point History</button>
       
        </div>
        <div className="badges_img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYMU-S6g2RbGd67AlAU_BwFhaoJ524dunP4w&usqp=CAU" alt="" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWH2KrHkJzhF38lmy5u1AjiVqT2t7e5cs0CAt9RkQPw&s" alt="" />
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHsVgWpQ4Lw2sEcZ-BJuugYiUK5VNPUafp09Soy71B174_l_c6" alt="" />
            </div>
      </div>

      
    </div>
    
  );

}

export default Profile;
