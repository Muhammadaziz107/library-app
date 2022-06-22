import Coursesbody from "../../Components/Courses/courses";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import "./one.css";

function Onecourse() {
  return (
    <div>
      <Header />

      <div className="content">
        <Coursesbody />
      </div>

      <div className="footer-box">
        <Footer />
      </div>
    </div>
  );
}
export default Onecourse;
