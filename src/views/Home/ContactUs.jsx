import React from "react";
import { Row, Col, Button } from "antd";

const ContactUs = () => {
  return (
    <div className="home-contact">
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
