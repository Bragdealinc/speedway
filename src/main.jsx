import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="overarching">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Landing />
                <InfoSection />
                <div id="comingsoon-section">
                  <ComingSoonDisplay />
                  </div>
                <CommunitiesGrid />
              </>
            }
          />

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
