import React from 'react'

const ImageCard = ({img}) => {
    return (
      <div className="home-about__picture">
        <img src={img} alt="About" />
      </div>
    );
}

export default ImageCard;
