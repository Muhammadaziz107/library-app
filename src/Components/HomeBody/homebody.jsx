import React from "react";
import "./homebody.css";
import library from "../../Assets/Images/Library.png";
import courses from "../../Assets/Images/courses.png";
import { NavLink } from "react-router-dom";

function Homebody() {
  return (
    <div className="homebody">
      <div className="container">
        <div className="homebody__wrapper">
          <div className="homebody_library">
            <NavLink className="homebody_link" to="/library">
              <img
                className="img_library"
                src={library}
                alt="library app"
                width="300"
                height="200"
              />
              <h3>Library</h3>
              <p>Lorem ipsum dolor sit amet...</p>
            </NavLink>
          </div>
          <div className="homebody_library">
            <NavLink className="homebody_link" to="/courses">
              <img
                className="img_library"
                src={courses}
                alt="library app"
                width="300"
                height="200"
              />
              <h3>Courses</h3>
              <p>Lorem ipsum dolor sit amet...</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homebody;
