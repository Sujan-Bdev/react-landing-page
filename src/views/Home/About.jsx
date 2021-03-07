import React from "react";
import { Row, Col, Button } from "antd";
import card1 from "assets/img/image-card-1.jpg";
import card2 from "assets/img/image-card-2.jpg";
import ImageCard from "components/ImageCard";

const About = () => {
  return (
    <div className="home-about">
      <div className="container">
        <Row gutter={[48, 40]} justify="center" align="middle" className = "first-row">
          <Col span={6}>
            <img
              src={card1}
              alt="About"
              className="home-about__picture picture-1"
            />
          </Col>
          <Col span={8}>
            <div className="about__text-box">
              <h2 className="about__text--primary">
                Construct for World Business
              </h2>
              <p className="about__text--secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                non turpis vel enim volutpat hendrerit pretium vitae ipsum. In
                dictum sed quam nec fermentum. Donec vitae pulvinar quam, vel
                ultrices arcu. Nullam sed sollicitudin sapien.
              </p>
              <Button className="btn">Read Documentation</Button>
            </div>
          </Col>
        </Row>


        <Row gutter={[16, 24]} justify="center"  className = "second-row">
          <Col span={8} offset={1}>
            <div className="about__text-box">
              <h2 className="about__text--primary">
                The road to Development is through us
              </h2>
              <p className="about__text--secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                non turpis vel enim volutpat hendrerit pretium vitae ipsum. In
                dictum sed quam nec fermentum. Donec vitae pulvinar quam, vel
                ultrices arcu. Nullam sed sollicitudin sapien.
              </p>
              <Button className="btn">Read Documentation</Button>
            </div>
          </Col>
          <Col span={6}>
            <img
              src={card2}
              alt="About"
              className="home-about__picture picture-2"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
