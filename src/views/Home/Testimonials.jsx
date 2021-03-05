import React, { useState } from "react";
import { Button } from "antd";
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
  const [current, setCurrent] = useState(0);
  const [testimonial, setTestimonial] = useState(clientList[current].response);

  const length = clientList.length;

  const nextClient = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setTestimonial(clientList[current].response);
    // console.log(clientList[current]);

  };

  const prevClient = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setTestimonial(clientList[current].response);
    // console.log(clientList[current]);
  };
  
  // console.log(current)

  const [isClick, setClick] = useState(false);

  const handleClick = (e, response) => {
    setTestimonial(response);
    // setClick(true);
  };
  return (
    <div className="home-testimonials">
      <div className="container">
        <div className="testimonial__box">
          <div className="section__title">
            <h2>Listen from our Clients</h2>
          </div>

          <div className="client__list">
            {clientList.map((client, index) => (
              <img
                key={client.id}
                src={client.image}
                className={client.class}
                alt={client.class}
                onClick={(e) => handleClick(e, client.response)}
              />
            ))}
          </div>

          <div className="message">
            <p className="message__text">{testimonial}</p>
          </div>

          <div className="carousel-button">
            <Button
              shape="circle"
              icon={<GrFormPreviousLink />}
              type="ghost"
              onClick={prevClient}
            />
            <Button
              shape="circle"
              icon={<GrLinkNext />}
              type="ghost"
              onClick={nextClient}
            />
          </div>

          <h3 className="advertise">
            We are the developers you want
            <span className="advertise__text">
              Our team of Happiness Engineers working remotely from 58 countries
              providing customer support across multiple time zones.
            </span>
          </h3>
          <img className="developers" src={developers} alt="developers" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
