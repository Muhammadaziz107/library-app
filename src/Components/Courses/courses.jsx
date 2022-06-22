import React, { useEffect, useState } from "react";
import "./courses.css";
import courses from "../../Assets/Images/courses.png";
import { NavLink } from "react-router-dom";

function Coursesbody() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://coursesnodejs.herokuapp.com/user/course?limit=5&page=1",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        if (res.status === 200) {
          const request = await res.json();
          const data = request.data.data;
          setData(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  });
  return (
    <div className="homebody">
      <div className="container">
        <div className="homebody__wrapper library-branches">
          {data &&
            data.map(e => (
              <div className="homebody_library branch--wrapper" key={e._id}>
                <NavLink className="homebody_link" to="/" key={e._id}>
                  <img
                    className="img_library"
                    src={courses}
                    alt="library app"
                    width="300"
                    height="200"
                  />
                  <h3>{e.name}</h3>
                  <p>{e.description}</p>
                </NavLink>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Coursesbody;
