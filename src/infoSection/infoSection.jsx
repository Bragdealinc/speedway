import "./infoSection.css";
import { useNavigate, useLocation } from "react-router-dom";

function InfoSection() {
  const navigate = useNavigate();

  const handleScrollToTop = (path) => (event) => {
    event.preventDefault();
    navigate(path);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };
  return (
    <div className="InfoSectionWrap">
      <div className="WhyInsulate">
        <h2 className="WhyInsulateTitle">
          30+ years of development and construction experience in the lower
          mainland.
        </h2>
        <p className="WhyInsulateText">
Speedway Homes is a family-run residential development and construction company. We are committed to providing quality and functionality in every unit. If you are looking for your next home, a wise investment, or a development partner, please reach out to connect.
          <br />
          <button
            className="ServiceButton"
            onClick={handleScrollToTop("/contact")}
          >
            Contact Us
          </button>
        </p>
      </div>
    </div>
  );
}

export default InfoSection;
