import React from 'react'
import {Link} from 'react-router-dom';
import {Button } from 'antd'
const index = () => {
    return (
      <div className="abouts">
        <div className="abouts__inner-section">
          <h2 className="abouts__text--main">abouts Us</h2>
          <p className="abouts__text--sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <Link to="contact">
            <Button  className = "btn">Contact</Button>
          </Link>
        </div>
      </div>
    );
}

export default index
