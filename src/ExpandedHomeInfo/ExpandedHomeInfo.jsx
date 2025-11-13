import "./ExpandedHomeInfo.css";
import { useLocation } from "react-router-dom";
import React from "react";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function ExpandedHomeInfo() {
  const query = useQuery();

  const communityId = query.get("communityId");
  const communityType = query.get("communityType");
  const imageUrl = decodeURIComponent(query.get("imageUrl") || "");
  const projectName = decodeURIComponent(query.get("projectName") || "");
  const location = query.get("location");
  const thumbnailDesc = decodeURIComponent(query.get("thumbnailDesc") || "");

  const longDesc = decodeURIComponent(query.get("long_desc") || "");
  const status = decodeURIComponent(query.get("status") || "");
  const zoning = decodeURIComponent(query.get("zoning") || "");

  return (
    <div className="ExpandedHomeInfo">
      <div
        className="expanded-image-landing"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div id="bottomLeftText">
          <h1 id="bottom-left-title">{projectName}</h1>
          <p id="bottom-left-subtitle">{thumbnailDesc}</p>
        </div>
        <div className="scroll-arrow">↓</div>
      </div>

      <div id="expanded-description">
        <div className="desc-grid">
          <h1 id="center" style={{ gridArea: "1 / 1 / 2 / -1" }}>
            Property details
          </h1>
          <div className="desc-item">
            <h3>STATUS</h3>
            <p>{status}</p>
          </div>
          <div className="desc-item">
            <h3>NEIGHBOURHOOD</h3>
            <p>{location}</p>
          </div>
          <div className="desc-item">
            <h3>HOME TYPE</h3>
            <p>{communityType}</p>
          </div>
          <div className="desc-item">
            <h3>YEAR</h3>
            <p>{zoning}</p>
          </div>
        </div>
        <div className="desc-long">
          <p>{longDesc}</p>
        </div>
        {/* <button className="desc-button">Visit Website →</button> */}
      </div>
    </div>
  );
}

export default ExpandedHomeInfo;
