import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Layout, Button } from "antd";
import * as path from "router/path";

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
                <Link className="nav__link" to={path.HOME}>
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to={path.ABOUTUS}>
                  About Us
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to={path.PROJECTS}>
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div className="cta">
            <Link to="/" className="nav__link">
              Schedule a Meeting
            </Link>
            <Link to={path.CONTACT}>
              <Button className="btn" to={path.CONTACT}>
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </Header>
  );
};

export default index;
