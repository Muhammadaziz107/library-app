import React, { useEffect, useState } from "react";
import "./info.css";
import avatar from "../../Assets/Images/avatar.png";

function Profileinfo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://coursesnodejs.herokuapp.com/user/getProfile", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        if (res.status === 200) {
          const request = await res.json();
          const data = request.data.data;
          const token =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFkNjYyOWRjMWY1ZjE5ZTViZWYyMjIiLCJpYXQiOjE2NTU4OTEwNjEsImV4cCI6MTY1NjQ5NTg2MX0.nfG-ZCRpzVyfD6IUaXOLtSXIf46ks6h2cVFlxdjqHHg";
          window.localStorage.setItem("token", JSON.stringify(token));
          // setData(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  });

  return (
    <div className="profile">
      <div className="container">
        <div className="profile_wrapper">
          <img src={avatar} alt="avatar" />
        </div>

        <h2>Student</h2>
        <h2>2022-06-19T11:21:13.120Z</h2>
      </div>
    </div>
  );
}

export default Profileinfo;
