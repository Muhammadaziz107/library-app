import React, { useEffect, useRef, useState } from "react";
import "./library.css";
import { NavLink } from "react-router-dom";
import courses from "../../Assets/Images/courses.png";

function LibraryBranch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://coursesnodejs.herokuapp.com/user/book?page=1&limit=5",
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
    <div className="branches">
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
                  <p>Lorem ipsum dolor sit amet...</p>
                </NavLink>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default LibraryBranch;
