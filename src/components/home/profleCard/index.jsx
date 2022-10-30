import React from 'react'
import './profileCard.css'

export const ProfileCard = ({user}) => {
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
        <p className="profile__text--repos">
          <span>Repositories:</span>
          {user.public_repos}
        </p>
        <p className="profile__text--follow">
          <span>Followers:</span> {user.followers} 
          <span>Following:</span>
          {user.following}
        </p>
      </div>
    </div>
  );
}
