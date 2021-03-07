import React from "react";

const FooterSubLink = ({ links }) => {
  return (
    <ul className="footer__sublink-list">
      {links.map((link, index) => (
        <li key={index}>
          {" "}
          <a href="#" className = "sub__list">{link} </a>{" "}
        </li>
      ))}
    </ul>
  );
};

export default FooterSubLink;
