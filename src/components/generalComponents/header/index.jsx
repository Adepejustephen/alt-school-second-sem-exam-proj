import React from "react";
import GitHubLogo from '../../../assets/github.svg'
import './header.css'

export const Header = () => {
    return (
      <header className="header">
        <img src={GitHubLogo} alt="git-hub-logo" />
        <h4 className="header__text">Ifeoluwa Adepeju</h4>
        
      </header>
    );
};
