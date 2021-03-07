import React from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";

import heroImage from "assets/img/hero.png";

const Hero = () => {
  return (
    <div className="home-hero">
      <Row gutter={[16, 16]} justify = "center">
        <Col xs = {24} md = {12} >
          <div className="home-hero__text">
            <h2 className="home-hero__text--main">
              Building the Projects that empowers the next Global Progress
            </h2>
            <p className="home-hero__text--sub">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non
              turpis vel enim volutpat hendrerit pretium vitae ipsum. In dictum
              sed quam nec fermentum.{" "}
            </p>
            <Link to="/">
              <Button className="btn btn--hero" size="large">
                View Projects
              </Button>
            </Link>
          </div>
        </Col>
        <Col span={12}>
          <div className="home-hero__picture">
            <img src={heroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
