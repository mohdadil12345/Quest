import React, { useEffect, useState } from "react";
import Popup from "./Popup";
function Profile() {


  const [img, setimg] = useState("");
  const [show, setShow] = useState(false);
  const [data, setdata] = useState("")
  const [tier, settier] = useState("")
  const [badge4, setbadge4] = useState("")
  const [badge5, setbadge5] = useState("")
  const [badge7, setbadge7] = useState("")
  const [rank, setrank] = useState("")



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
       console.log("3",data.data);
       setrank(data.data.position)
       
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
       console.log("5", data.data[0].imageUrl);
       setbadge4(data.data[4].imageUrl)
       setbadge5(data.data[2].imageUrl)
       setbadge7(data.data[7].imageUrl)
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
    setShow(!show)
]

const close = () => [
    setShow(false)
]


  return (

    <div className="profile_container">
   
   {show && <Popup close ={close} badge4={badge4} badge7={badge7}/>}
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
          <h5>#{rank}</h5>
            <p>Rank</p>
          </div>

          <div>
          <h5>{tier}</h5>
            <p>Level</p>
          </div>


        </div>

        <div className="member">
          <p >Member</p>
          <p >Badges</p>
          <p>Point History</p>
       
        </div>
        <div className="badges_img">
            <img onClick={handle_click} src={badge4} alt="" />
            <img onClick={handle_click} src={badge5} alt="" />
            <img onClick={handle_click} src={badge7} alt="" />
            </div>
      </div>

      
    </div>
    
  );

}

export default Profile;
