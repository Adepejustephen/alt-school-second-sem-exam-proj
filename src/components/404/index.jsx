import React from "react";
import { useNavigate } from "react-router-dom";
import SVG404 from "../../assets/404.svg";
import "./404.css";

export const Page404Ui = () => {
    const navigate = useNavigate()
  return (
    <div className="container">
          <img src={SVG404} alt="404-svg" />
          <button className="btn"onClick={() => navigate('/')} >Return home</button>
    </div>
  );
};
