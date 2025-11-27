import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import Landing from "./Landing/Landing";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer.jsx";
import CommunitiesGrid from "./Communities/CommunitiesGrid.jsx";
import InfoSection from "./infoSection/infoSection.jsx";
import ZoomText from "./ZoomText/ZoomText.jsx";
import Reviews from "./Reviews/Reviews.jsx";
import ExpandedHomeInfo from "./ExpandedHomeInfo/ExpandedHomeInfo.jsx";
import Login from "./Login/Login.jsx";
import AuthUserLanding from "./AuthUserLanding/AuthUserLanding.jsx";
import DeletePost from "./DeletePost/DeletePost.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";
import ExperienceBanner from "./experienceBanner/experienceBanner.jsx";
import ComingSoonDisplay from "./ComingSoonDisplay/ComingSoonDisplay.jsx";
import ProductDetail from "./ProductDetail/ProductDetail.jsx";

function HomeLayout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== "#communities") return;

    const timer = setTimeout(() => {
      document.getElementById("communities-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);

    return () => clearTimeout(timer);
  }, [location.hash]);

  return (
    <>
      <Landing />
      <InfoSection />
      <div id="comingsoon-section">
        <ComingSoonDisplay />
      </div>
      <CommunitiesGrid />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="overarching">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeLayout />} />

          <Route
            path="/authUserLanding"
            element={
              <>
                <AuthUserLanding />

                <DeletePost />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <Contact />
              </>
            }
          />

          <Route
            path="/expanded-home-info"
            element={
              <>
                <ExpandedHomeInfo />
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />

          <Route
            path="/project/:projectId"
            element={
              <>
                <ProductDetail />
              </>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  </React.StrictMode>,
);
