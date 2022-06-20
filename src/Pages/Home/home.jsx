import React from "react";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import Homebody from "../../Components/HomeBody/homebody";
import Homeintro from "../../Components/HomeIntro/homeintro";

import "./home.css";

function Home() {
  return (
    <div>
      <Header />

      <div className="content">
        <Homeintro />
        <Homebody />
      </div>

      <div className="footer-box">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
