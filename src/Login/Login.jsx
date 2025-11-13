import { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  axios.defaults.withCredentials = true;
  axios.defaults.withXSRFToken = true;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.get("https://api.speedwayhomes.ca/sanctum/csrf-cookie", {
        withCredentials: true,
      });

      const csrfToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("XSRF-TOKEN"))
        ?.split("=")[1];

      if (!csrfToken) {
        setResponseMessage("CSRF token not found.");
        return;
      }

      const response = await axios.post(
        "https://api.speedwayhomes.ca/login2",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": csrfToken,
          },
          withCredentials: true,
        },
      );

      setResponseMessage(response.data.message);
      console.log(response.data);
      if (response.status === 200) {
        navigate("/authUserLanding");
      }
    } catch (error) {
      if (error.response) {
        setResponseMessage(
          `Error: ${error.response.status} - ${JSON.stringify(
            error.response.data,
          )}`,
        );
      } else {
        setResponseMessage(`An error occurred: ${error.message}`);
      }
    }
  };

  return (
    <div className="login-section">
      <br />
      <br />
      <br />
      <br />
      <form id="userForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
      {responseMessage && (
        <div className="response-message">{responseMessage}</div>
      )}
    </div>
  );
};

export default Login;
