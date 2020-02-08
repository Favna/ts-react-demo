import React, { FC } from "react";
import logo from "./logo.svg";
import "./Header.scss";

interface HeaderProps {
  userName: string;
}

const Header: FC<HeaderProps> = props => {
  return (
    <header className="Header">
      <img src={logo} className="Logo" alt="logo" />
      <p>welcome {props.userName}</p>
    </header>
  );
};

export default Header;
