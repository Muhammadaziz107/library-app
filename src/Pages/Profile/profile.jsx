import React from "react";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import Homeintro from "../../Components/HomeIntro/homeintro";
import "./profile.css";

function Profile() {
  return (
    <div className="profile">
      <Header />

      <div className="content">
        <Homeintro />
      </div>

      <div className="footer-box">
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
