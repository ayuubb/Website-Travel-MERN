import React, { useState } from 'react';

import propTypes from 'prop-types';
import './index.scss';

export default function Number(props) {
  const { value, placeholder, name, min, max, prefix, suffix } = props;
  const [inputValue, setValue] = useState(`${prefix}${value}${suffix}`);
  return <div></div>;
}
