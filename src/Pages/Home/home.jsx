import React from "react";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";

import "./home.css";

function Home() {
  return (
    <div>
      <Header />

      <div className="content"></div>

      <div className="footer-box">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
