import React from "react";



import { Spinner } from "../generalComponents";
import { ProfileCard } from "./profleCard";
import "./home.css";
import { Helmet } from "../../helpers";

export const HomeUi = ({ user, error, loading }) => {
  

  if (!loading && error) {
    return <p>{error}</p>;
  }

  return (
    <div className="home">
      <Helmet title={user.name} desc={user.bio} />
      {loading ? <Spinner /> : <ProfileCard user={user} />}

     
    </div>
  );
};
