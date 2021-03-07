import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GiComputerFan } from "react-icons/gi";
import { FaLock } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaRss } from "react-icons/fa";

import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import FooterSubLink from "./FooterSubLink";

const Index = () => {
  const [features, setfeatures] = useState([
    {
      id: 1,
      text: " 7 day project qutation for the project",
      icon: <AiOutlineSafetyCertificate />,
    },
    {
      id: 2,
      text: "Support teams across the world",
      icon: <GiComputerFan />,
    },
    {
      id: 3,
      text: " Easy to talk and build for company",
      icon: <FaLock />,
    },
  ]);

  const [footerLinks, setfooterLinks] = useState([
    {
      id: 1,
      title: "who we are",
      subtitles: ["About", "Team", "Work With Us"],
    },
    {
      id: 2,
      title: "Woocommerce",
      subtitles: [
        "Features",
        "Payments",
        "Marketing",
        "Shipping",
        "Extension Store",
        "eCommerce blog",
        "Development blog",
        "Ideas board",
        "Mobile App",
        "Community",
        "Style Guide",
        "Email Newsletter",
      ],
    },
    {
      id: 3,
      title: "Other products",
      subtitles: ["Storefront", "WooSlider", "Sensei", "Sensei Extensions"],
    },
    {
      id: 4,
      title: "Support",
      subtitles: [
        "Documentation",
        "Customizations",
        "Support Policy",
        "Contact",
        "COVID-19 Resources",
        "Privacy Notice",
        "California Users",
      ],
    },
    {
      id: 5,
      title: "We recommend",
      subtitles: [
        "WooExperts",
        "Hosting Solutions",
        "Pre-sales FAQ",
        "Success Stories",
        "Design Feedback Group",
      ],
    },
  ]);

  return (
    <footer className="footer">
      {/* <div className="footer__top">
          <Row gutter={[16, 16]} justify="space-around" align="middle">
            {features.map((feature) => (
              <Col span={6}>
                <Link to="/" className="footer__link">
                  {" "}
                  {feature.icon} <span> {feature.text} </span>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
       */}

      <div className="footer__main">
        <div className="features">
          <ul className="features__list">
            {features.map((feature) => (
              <li className="features__item" key={feature.id}>
                <Link className="features__link">
                  {feature.icon}
                  <span>{feature.text}</span>
                </Link>{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__logo">
          <h3 className="footer__logo-text">Logo</h3>
        </div>

        <div className="footer__navigation">
          <ul className="footer__navigation-list">
            {footerLinks.map((footerLink) => (
              <li className="footer__navigation-item" key={footerLink.id}>
                {" "}
                <Link className="footer__navigation-link">
                  {footerLink.title}
                </Link>{" "}
                <FooterSubLink links={footerLink.subtitles} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__sub">
        <div className="social-icon">
          <ul className="social-icon__list">
            <li className="social-icon__item">
              <Link className="social-icon__link">
                <AiOutlineTwitter />
              </Link>{" "}
            </li>
            <li className="social-icon__item">
              <Link className="social-icon__link">
                <FaFacebook />
              </Link>{" "}
            </li>
            <li className="social-icon__item">
              <Link className="social-icon__link">
                <FaRss />
              </Link>{" "}
            </li>

            <li className="social-icon__item">
              <Link className="social-icon__link">
                <AiFillInstagram />
              </Link>{" "}
            </li>
          </ul>
        </div>
        <p className="footer__sub-text">TERMS & CONDITIONS PRIVACY POLICY</p>

        <p className="footer__sub-text">
          Designed by <span>Saga Inovation</span>
        </p>
      </div>
    </footer>
  );
};

export default Index;
