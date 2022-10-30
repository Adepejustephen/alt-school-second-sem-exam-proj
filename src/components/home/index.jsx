import React from "react";
import { useContext } from "react";
import { Store} from "../../context/AppContext";
import { Spinner } from "../generalComponents";
import { ProfileCard } from "./profleCard";
import './home.css'

export const HomeUi = () => {
  const { FetchUser,  } = useContext(Store);
  const { user, error, loading } = FetchUser();

    
     if (!loading && error) {
         return <p>{ error}</p>;
     }

  return (
    <div className="home">
      {loading ? <Spinner /> : <ProfileCard user={user} />}
    </div>
  );
};
