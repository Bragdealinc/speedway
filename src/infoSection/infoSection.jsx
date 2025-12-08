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
          Speedway Homes is a family-run business specializing in
          residential developments. Speedway Homes is committed to quality and
          excellence, focusing on delivering exceptional service and innovative
          solutions for each project. Whether you need a new home or a wise
          investment, trust Speedway Homes for all your real estate needs.
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
