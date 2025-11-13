import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ComingSoonDisplay.css";

const ComingSoonDisplay = () => {
  const navigate = useNavigate();
  const [comingSoonProject, setComingSoonProject] = useState(null);

  useEffect(() => {
    // Fetch all projects
    axios
      .get("https://api.speedwayhomes.ca/house")
      .then((response) => {
        // Find the project where zoning is "Coming Soon Display"
        const project = response.data.find(
          (proj) => proj.zoning === "Coming Soon Display"
        );
        setComingSoonProject(project);
      })
      .catch((error) =>
        console.error("Error fetching ComingSoonDisplay data:", error)
      );
  }, []);

  const handleInquireClick = () => {
    navigate("/contact");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  if (!comingSoonProject) {
    // If the ComingSoonDisplay project is not found, render nothing or a placeholder
    return null;
  }

  // Split the description by line breaks to handle user-added line spacing
  const descriptionLines = comingSoonProject.long_desc.split("\n");

  return (
    <section className="coming-soon-display">
      <div className="coming-soon-container">
        {/* Left Image Section */}
        <div className="image-container">
          <img
            src={comingSoonProject.image_url}
            alt="Upcoming Property"
            className="property-image"
          />
          {/* Updated status-banner to use a unique class */}
          <div className="cs-status-banner">Selling Now!</div>
        </div>

        {/* Right Text Section */}
        <div className="caption-container">
          {/* Removed the status-text from here */}
          {/* <h2 className="status-text">Selling Now!</h2> */}
          <h3 className="project-name">{comingSoonProject.project_name}</h3>
          <div className="mini-caption">
            {descriptionLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <button className="cta-button" onClick={handleInquireClick}>
            Inquire Now
          </button>

          {/* Bouncing Downward Arrow */}
          <div className="bounce-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="black"
              viewBox="0 0 24 24"
            >
              <path d="M12 16.5l-8-8h5V4h6v4.5h5l-8 8z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonDisplay;
