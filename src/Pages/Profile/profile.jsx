import React from "react";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import Profileinfo from "../../Components/ProfileInfo/info";
import "./profile.css";

function Profile() {
  return (
    <div className="profile">
      <Header />

      <div className="content">
        <Profileinfo />
      </div>

      <div className="footer-box">
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
