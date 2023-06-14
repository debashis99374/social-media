import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PostContext } from "../context/postContext";

import "../css/home.css";

export default function Home() {
  const {data}=useContext(PostContext)
  return (
    <div className="home">
      <div className="home-navigate">
        <NavLink to="/">
          <span className="fa fa-home">Home</span>
        </NavLink>
        <NavLink to="/explore">
          <span className="fa fa-rocket">Explore</span>
        </NavLink>
        <NavLink to="/bookmark">
          <span className="fa fa-bookmark-o">Bookmarks</span>
        </NavLink>
        <NavLink to="/profile">
          <span className="fa fa-user-o">Profile</span>
        </NavLink>
        <button>Create New post</button>
      </div>
      <div className="main-content">
        <div className="create-post">
          <label htmlFor="new-post"></label>
          <input
            type="text"
            name=""
            id="new-post"
            placeholder="What is Happening!?"
          />
          <div>
            <span className="fa fa-image"></span>
            <span className="fa fa-smile-o"></span>
            <button>Post</button>
          </div>
        </div>
        <div className="latest-post">
          <h2>Will show posts of the following and self</h2>
          <ul>
            {data.allPosts.map((item) => (
              <li key={item._id}>
                <h3>{item.username}</h3>
                <p>{item.content}</p>
                <div className="post-icons">
                  <span className="	fa fa-heart-o"></span>
                  <span className="fa fa-comment-o"></span>
                  <span className="fa fa-share-alt"></span>
                  <span className="fa fa-bookmark-o"></span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sidebar">
        <label htmlFor="search">Search</label>
        <input
          type="text"
          name=""
          id="search"
          placeholder="Search people, post, anything"
        />
        <div>
          <h2>Who to follow?</h2>
          <button>
            <span className="test">Following</span>
            <span className="test2">Unfollow</span>
          </button>
          <ul>
            {data.allUsers.map((item) => (
              <li key={item._id}>
                {item.username}
                <button>Follow</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}