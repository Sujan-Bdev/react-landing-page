import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Layout, Button } from "antd";

const { Header } = Layout;

const index = () => {
  return (
    <Header className="top-header">
      <nav className="nav">
        <div className="container">
          <div className="nav__logo">
            <Link to={"/"}>
              <h4 className="logo__text">Logo</h4>
            </Link>
          </div>

          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link className="nav__link">Home</Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link">About Us</Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link">Projects</Link>
              </li>
            </ul>
          </div>
          <div className="cta">
            <Link to="/" className="nav__link">
              Schedule a Meeting
            </Link>
            <Button className="btn">Contact Us</Button>
          </div>
        </div>
      </nav>
    </Header>
  );
};

export default index;
