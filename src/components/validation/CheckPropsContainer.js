import React from 'react';
import CheckProps from './CheckProps';
import SimpleProps from './SimpleProps';

const CheckPropsContainer = props => {
  return (
    <div>
      <CheckProps {...props} />
      <br />
      <br />
      <SimpleProps myString={5} />
    </div>
  );
};

export default CheckPropsContainer;
