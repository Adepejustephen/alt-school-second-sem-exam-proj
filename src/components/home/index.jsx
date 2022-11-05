import React from "react";


import { Spinner } from "../generalComponents";
import { ProfileCard } from "./profleCard";
import "./home.css";

export const HomeUi = ({ user, error, loading }) => {
  

  if (!loading && error) {
    return <p>{error}</p>;
  }

  return (
    <div className="home">
      {loading ? <Spinner /> : <ProfileCard user={user} />}
    </div>
  );
};
