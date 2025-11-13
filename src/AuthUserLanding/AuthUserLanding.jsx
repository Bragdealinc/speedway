import { useState, useEffect } from "react";
import axios from "axios";
import "./AuthUserLanding.css";
import { useNavigate } from "react-router-dom";

function AuthUserLanding() {
  axios.defaults.withCredentials = true;
  axios.defaults.withXSRFToken = true;

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    status: "On Sale",
    project_name: "",
    image_url: "",
    zoning: "", // Initialize as empty to handle both year and 'Coming Soon Display'
    location: "",
    type: "Townhouse",
    thumbnail_desc: "",
    long_desc: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isYearBuilt, setIsYearBuilt] = useState(false); // New state to track if 'Year Built' is selected
  const [yearBuilt, setYearBuilt] = useState(""); // New state to store the entered year

  useEffect(() => {
    axios
      .get("https://api.speedwayhomes.ca/sanctum/csrf-cookie", {
        withCredentials: true,
      })
      .catch((error) => console.error("Error fetching CSRF token:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "year_built") {
      setYearBuilt(value);
      setFormData({ ...formData, zoning: value });
    } else {
      setFormData({ ...formData, [name]: value });

      // If zoning is not 'Coming Soon Display', reset yearBuilt
      if (name === "zoning" && value !== "Coming Soon Display") {
        setIsYearBuilt(false);
        setYearBuilt("");
      }
    }
  };

  const handleZoningChange = (e) => {
    const value = e.target.value;
    if (value === "Year Built") {
      setIsYearBuilt(true);
      setFormData({ ...formData, zoning: "" }); // Reset zoning when 'Year Built' is selected
      setYearBuilt(""); // Reset yearBuilt
    } else {
      setIsYearBuilt(false);
      setFormData({ ...formData, zoning: value });
      setYearBuilt(""); // Reset yearBuilt
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.tagName === "TEXTAREA") {
      // Allow Enter key to insert a new line in textarea
      e.stopPropagation();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const csrfToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("XSRF-TOKEN"))
      ?.split("=")[1];

    if (!csrfToken) {
      setResponseMessage("CSRF token not found.");
      return;
    }

    try {
      // If zoning is "Coming Soon Display", delete existing Coming Soon Display projects
      if (formData.zoning === "Coming Soon Display") {
        // Fetch all projects to find existing Coming Soon Display projects
        const allProjectsResponse = await axios.get(
          "https://api.speedwayhomes.ca/house",
          { withCredentials: true }
        );
        const existingComingSoonProjects = allProjectsResponse.data.filter(
          (project) => project.zoning === "Coming Soon Display"
        );

        // Delete existing Coming Soon Display projects
        for (const project of existingComingSoonProjects) {
          await axios.delete(
            `https://api.speedwayhomes.ca/house/${project.id}`,
            {
              headers: {
                "X-XSRF-TOKEN": csrfToken,
              },
              withCredentials: true,
            }
          );
        }
      }

      // If zoning is "Year Built", ensure a year is entered
      if (isYearBuilt) {
        if (!yearBuilt) {
          setResponseMessage("Please enter the Year Built.");
          return;
        }
        formData.zoning = yearBuilt.toString(); // Convert year to string if necessary
      }

      // Create new project
      const response = await axios.post(
        "https://api.speedwayhomes.ca/house",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": csrfToken,
          },
          withCredentials: true,
        }
      );

      setResponseMessage("Form submitted successfully!");
      console.log("Form submitted:", response.data);
    } catch (error) {
      if (error.response) {
        setResponseMessage(
          `Error: ${error.response.status} - ${JSON.stringify(
            error.response.data
          )}`
        );
      } else {
        setResponseMessage(`An error occurred: ${error.message}`);
      }
    }
  };

  return (
    <div className="AuthUserLanding">
      <form
        id="authUserForm"
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}
      >
        <h1>Add a New Project</h1>
        <br />

        {/* Status field */}
        <select
          id="statusSelect"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="On Sale">On Sale</option>
          <option value="Sold Out">Sold Out</option>
          <option value="Coming Soon">Coming Soon</option>
        </select>

        <input
          type="text"
          id="nameInput"
          name="project_name"
          value={formData.project_name}
          onChange={handleChange}
          placeholder="Project Name"
        />
        <input
          type="text"
          id="imageUrlInput"
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
          placeholder="Image URL"
        />

        {/* Updated Zoning field labeled as Year Built */}
        <label htmlFor="zoningSelect">Year Built</label>
        <select
          id="zoningSelect"
          name="Year Developed"
          value={formData.zoning === "Year Built" ? "" : formData.zoning}
          onChange={handleZoningChange}
        >
          <option value="">Select</option>
          <option value="Coming Soon Display">Coming Soon Display</option>
          <option value="Year Built">Year Built</option>
        </select>

        {/* Conditionally render Year Built input */}
        {isYearBuilt && (
          <input
            type="number"
            id="yearBuiltInput"
            name="year_built"
            value={yearBuilt}
            onChange={handleChange}
            placeholder="Enter Year Built"
            min="1800" // Assuming no projects before 1800
            max={new Date().getFullYear()} // Current year as maximum
            required
          />
        )}

        <input
          type="text"
          id="locationInput"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
        />
        <select
          id="typeSelect"
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="Townhouse">Townhouse</option>
          <option value="Duplex">Duplex</option>
          <option value="Single-Family Home">Single-Family Home</option>
        </select>
        <input
          type="text"
          id="thumbnailDescriptionInput"
          name="thumbnail_desc"
          value={formData.thumbnail_desc}
          onChange={handleChange}
          placeholder="Thumbnail Description"
        />
        <textarea
          id="longDescriptionTextarea"
          name="long_desc"
          value={formData.long_desc}
          onChange={handleChange}
          placeholder="Long Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {responseMessage && (
        <div className="response-message">{responseMessage}</div>
      )}
    </div>
  );
}

export default AuthUserLanding;
