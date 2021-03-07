import React from "react";
import { Row, Col, Button } from "antd";
import developer from 'assets/img/projects/developers.png'

const ContactUs = () => {
  return (
    <div className="home-contact">
        <div className="developer">
          <h3 className="developer__title">We are the developers you want.</h3>
          <p className="developer__subtitle">
            Our team of Happiness Engineers works remotely from 58 countries
            providing customer support across multiple time zones.
          </p>
          <img src = {developer} alt = "developer"/>
        </div>
      <div className="container">

        <Row justify="space-around" align="middle" gutter={[16, 16]}>
          
          <Col span={8}>
            <div className="contact">
              <p className="contact__text">
                Lorem ipsum dolor sit amet, consectetur
                <span> adipiscing elit. Nunc non turpis vel</span> enim volutpat
                hendrerit
              </p>
            </div>
          </Col>
          <Col span={4}>
            <Button className="btn btn--contact">Contact Us</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactUs;
