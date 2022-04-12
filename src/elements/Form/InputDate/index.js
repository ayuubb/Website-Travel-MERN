import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

function Date(props) {
  const { value, placeHolder, name } = props;
  const { isShowed, setIsShowed } = useState(false);

  const datePickerChange = (value) => {
    const target = {
      target: {
        value: value.selection,
        name: name,
      },
    };
    props.onChange(target);
    };
    
    useEffect({})

  return <div>index</div>;
}

Date.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  placeHolder: propTypes.string,
  outerClassName: propTypes.string,
};

export default Date;
