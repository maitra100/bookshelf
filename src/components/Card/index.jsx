import React from 'react';
import { PropTypes } from 'prop-types';
import './card.css';
import img from '../../assets/cover_image.jpeg';
import heartRed from '../../assets/heart-red.svg';
import heartBlack from '../../assets/heart-black.svg';
import { useState } from 'react';

function Card({ title, rating }) {
  const [like, setLike] = useState(false);

  function func() {
    setLike(!like);
  }

  return (
    <div id="card">
      <div id="img1">
        <img src={img} from alt="cover_image" width="160px" height="150px" />
      </div>
      <div id="name">{title}</div>
      <div id="bottom">
        <div id="rating">{rating}</div>
        <div id="img2">
          <img src={like ? heartBlack : heartRed} onClick={func} from alt="heart_red" width="25px" height="25px" />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  key: PropTypes.number,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Card;
