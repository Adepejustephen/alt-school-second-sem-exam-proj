import React from "react";
import { Link } from "react-router-dom";
import "./repocard.css"

export const RepoCard = ({ name, CreatedAt, id }) => {
  return (
    <Link to={`${id}`}>
      
      <div className="repoCard">
        <p className="repo__title">{name}</p>
        <div className="repo__details">
          <p className="repo__language">{CreatedAt}</p>
          <button>View details</button>
        </div>
      </div>
    </Link>
  );
};
