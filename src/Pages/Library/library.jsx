import React from "react";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import LibraryBranch from "../../Components/LibraryBranch/library";
import Libraryintro from "../../Components/LibraryIntro/intro";

function Library() {
  return (
    <div className="library">
      <Header />

      <div className="content">
        {/* <Libraryintro /> */}
        <LibraryBranch />
      </div>

      <div className="footer-box">
        <Footer />
      </div>
    </div>
  );
}

export default Library;
