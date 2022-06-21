import React, { useEffect, useRef, useState } from "react";
import "./library.css";
import { NavLink } from "react-router-dom";
import courses from "../../Assets/Images/courses.png";

function LibraryBranch() {
  const [data, setData] = useState([]);
  return (
    <div className="branches">
      <div className="container">
        <div className="homebody__wrapper">
          <div className="homebody_library">
            <NavLink className="homebody_link" to="/">
              <img
                className="img_library"
                src={courses}
                alt="library app"
                width="300"
                height="200"
              />
              <h3>Library</h3>
              <p>Lorem ipsum dolor sit amet...</p>
            </NavLink>
          </div>
          <div className="homebody_library">
            <NavLink className="homebody_link" to="/">
              <img
                className="img_library"
                src={courses}
                alt="library app"
                width="300"
                height="200"
              />
              <h3>Library</h3>
              <p>Lorem ipsum dolor sit amet...</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LibraryBranch;
