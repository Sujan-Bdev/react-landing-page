import React, { useState } from "react";
import { Row, Col, Carousel } from "antd";
import client1 from "assets/img/clients/client-1.png";
import client2 from "assets/img/clients/client-2.png";
import client3 from "assets/img/clients/client-3.png";
import client4 from "assets/img/clients/client-4.png";
import client5 from "assets/img/clients/client-5.png";
import client6 from "assets/img/clients/client-6.png";
import developers from "assets/img/projects/developers.png";
import { GrLinkNext } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

const Testimonials = () => {
  const [clientList] = useState([
    {
      id: 1,
      image: client1,
      response: "First Testimonial",
      class: "client1",
    },
    {
      id: 2,
      image: client2,
      response: "Second Testimonial",
      class: "client2",
    },
    {
      id: 3,
      image: client3,
      response: "Third Testimonial",
      class: "client3",
    },
    {
      id: 4,
      image: client4,
      response: "Fourth Testimonial",
      class: "client4",
    },
    {
      id: 5,
      image: client5,
      response: "Fifth Testimonial",
      class: "client5",
    },
    {
      id: 6,
      image: client6,
      response: "Sixth Testimonial",
      class: "client6",
    },
  ]);

  return (
    <div className="home-testimonials">
      <div className="section__title">
        <h2>Listen from our Clients</h2>
      </div>
      <div className="container">
        <Row justify = "center" gutter = {[16,16]} className = "client-row">
         <Col span = {10}>

          <div className="client__list">
            {clientList.map((client, index) => (
              <img
                key={client.id}
                src={client.image}
                className={client.class}
                alt={client.class}
              />
            ))}
          </div>

          <div className="carousel">
            <Carousel dots={false} arrows={true} autoplay>
              {clientList.map((client, index) => (
                <div className="message">
                  <p className="message__text">{client.response}</p>
                </div>
              ))}
            </Carousel>
          </div>
         </Col>
        </Row>
      </div>
    </div>
  );
};

export default Testimonials;
