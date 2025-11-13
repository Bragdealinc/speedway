import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Communities.css";

function Communities() {
  const [communityData, setCommunityData] = useState([]);
  const refs = useRef({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://api.speedwayhomes.ca/house", {
          withCredentials: true,
        });
        // Exclude projects where zoning is "Coming Soon Display"
        const filteredData = response.data.filter(
          (project) => project.zoning !== "Coming Soon Display"
        );
        setCommunityData(filteredData);
        filteredData.forEach((_, index) => {
          refs.current[`card${index}`] = { current: null };
        });
      } catch (error) {
        console.log("error loading in communities", error.response || error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      Object.entries(refs.current).forEach(([key, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const revealPoint = 150;

          if (rect.top < windowHeight - revealPoint) {
            ref.current.classList.add("active");
          } else {
            ref.current.classList.remove("active");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [communityData]);

  function getStatusClass(status) {
    if (status === "Sold Out") return "status-banner sold-out";
    else if (status === "Coming Soon") return "status-banner coming-soon";
    else if (status === "On Sale") return "status-banner on-sale";
    else return "status-banner";
  }

  return (
    <div id="communities-section">
      <h1 id="line-title">Communities</h1>
      <div className="line"></div>
      {communityData.map((community, index) => (
        <div
          key={community.id}
          className="card"
          ref={(el) => (refs.current[`card${index}`].current = el)}
        >
          <div className="card-image">
            <img src={community.image_url} alt={community.project_name} />
            <div className={getStatusClass(community.status)}>
              {community.status}
            </div>
          </div>
          <div className="card-content">
            <div className="card-header">
              <div className="project-name">{community.project_name}</div>
              <div className="location">{community.location}</div>
            </div>
            <div className="thumbnail-desc">{community.thumbnail_desc}</div>
            <button
              className="learn-more-button"
              onClick={() =>
                window.open(
                  `https://speedwayhomes.ca/expanded-home-info?communityId=${encodeURIComponent(
                    community.id
                  )}&communityType=${encodeURIComponent(
                    community.type
                  )}&imageUrl=${encodeURIComponent(
                    community.image_url
                  )}&projectName=${encodeURIComponent(
                    community.project_name
                  )}&location=${encodeURIComponent(
                    community.location
                  )}&thumbnailDesc=${encodeURIComponent(
                    community.thumbnail_desc
                  )}&long_desc=${encodeURIComponent(
                    community.long_desc
                  )}&status=${encodeURIComponent(
                    community.status
                  )}&zoning=${encodeURIComponent(community.zoning)}`,
                  "_self"
                )
              }
            >
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Communities;
