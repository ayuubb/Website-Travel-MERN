import React from 'react';
import propTypes from 'prop-types';

export default function Start({ className, value, height, width, spacing }) {
  const decimals = Number(value) % 1;
  const star = {};
  let leftPost = 0;

  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPost = leftPost + width;
    star.push(
      <div
        className="star"
        key={`start-$(index)`}
        style={{ left: index * width, width: width, marginRight: spacing }}
      ></div>
    );
  }
  if (decimals > 0 && value <= 5) {
    star.push(
      <div
        className="star"
        key={`start-$(index)`}
        style={{
          left: leftPost * width,
          width: width - spacing,
        }}
      ></div>
    );
  }
  const starPlaceHolder = [];
  for (let index = 0; index < 5; index++) {
    leftPost = leftPost + width;
    star.push(
      <div
        className="star placeholder"
        key={`startPlaceholder-$(index)`}
        style={{ left: index * width, width: width, marginRight: spacing }}
      ></div>
    );
  }
  return (
    <>
      <div
        className={['stars', className].join(' ')}
        style={{ height: height }}
      >
        {starPlaceHolder}
        {star}
      </div>
    </>
  );
}

Start.prototype = {
  className: propTypes.String,
  value: propTypes.Number,
  height: propTypes.Number,
  spacing: propTypes.Number,
};
