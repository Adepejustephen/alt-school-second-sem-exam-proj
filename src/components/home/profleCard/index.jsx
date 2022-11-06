import React from "react";
import { Link } from "react-router-dom";
import "./profileCard.css";

export const ProfileCard = ({ user }) => {
  return (
    <div className="profile">
      <div className="profile__img">
        <img src={user.avatar_url} alt={user.login} />
      </div>
      <div className="profile__text">
        <p className="profile__text--username">
          <span>Username:</span>
          {user.login}
        </p>
        <p className="profile__text--bio">
          <span>Bio:</span>
          {user.bio}
        </p>
        <p className="profile__text--twitter">
          <span>Twitter:</span>
          {user.twitter_username}
        </p>
        <p className="profile__text--location">
          <span>Location:</span>
          {user.location}
        </p>
        <p className="profile__text--join">
          <span>Join:</span>
          {new Date(user.created_at).toLocaleDateString()}
        </p>
        <p className="profile__text--follow">
          {user.followers}
          <span className="followers">Followers:</span>
        </p>
        <p>
          <span>Following:</span>
          {user.following}
        </p>
        <p className="profile__text--repos">
          <span>Public repositories:</span>
          {user.public_repos}
        </p>

        <div className="profile__btns">
          <Link to="/my-repositories">
            <button className="profile-btn"> View Repositories </button>
          </Link>
          <Link to="/error">
            <button className="profile-btn2"> check Erorr</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
