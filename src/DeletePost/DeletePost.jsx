import "./DeletePost.css";
import { useEffect, useState } from "react";
import axios from "axios";

function DeletePost() {
  const [communityData, setCommunityData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://api.speedwayhomes.ca/house", {
          withCredentials: true,
        });
        setCommunityData(response.data);
      } catch (error) {
        console.log("Error loading communities", error.response || error);
      }
    }
    fetchData();
  }, []);

  const deletePost = async (id) => {
    try {
      await axios.delete(`https://api.speedwayhomes.ca/house/${id}`, {
        withCredentials: true,
      });
      setCommunityData(communityData.filter((post) => post.id !== id));
      console.log(`Post with id ${id} deleted successfully`);
    } catch (error) {
      console.error("Error deleting the post", error.response || error);
    }
  };

  return (
    <div className="deletePost">
      <h1 id="deleteTitle">Delete Posts</h1>
      <ul className="postList">
        {communityData.map((post) => (
          <li className="postItem" key={post.id}>
            {post.project_name} (ID: {post.id}){" "}
            <button
              className="deleteButton"
              onClick={() => deletePost(post.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeletePost;
