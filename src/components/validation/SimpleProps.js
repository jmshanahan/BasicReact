import React from 'react';
import PropTypes from 'prop-types';

const SimpleProps = ({ myString }) => {
  return (
    <div>
      <p>{myString}</p>
    </div>
  );
};
SimpleProps.propTypes = {
  myString: PropTypes.number
};
export default SimpleProps;
