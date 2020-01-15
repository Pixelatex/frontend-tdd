import React from "react";
const sizes = {
  small: 150,
  medium: 300,
  large: 500
};
const Teaser = ({ image, text, size }) => {
  return (
    <div data-testid="teaser">
      <img data-testid="teaser-image" src={`${image}/${sizes[size]}`} />
      <span data-testid="teaser-title">{text}</span>
    </div>
  );
};

export default Teaser;
