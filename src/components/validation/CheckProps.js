import React from 'react';
import PropTypes from 'prop-types';
import cuid from 'cuid';
const CheckProps = ({ aString, aNumber, aBool, aFunc, aArray, aObject }) => {
  return (
    <section>
      <h1>Props</h1>
      <p>{aString}</p>
      <p>{aNumber}</p>
      <p>
        <input type="checkbox" defaultChecked={aBool} />
      </p>
      <p>{aFunc}</p>
      <ul>
        {aArray.map(i => (
          <li key={cuid()}>{i}</li>
        ))}
      </ul>
      <p>{aObject.aProp}</p>
    </section>
  );
};
CheckProps.propTypes = {
  aString: PropTypes.string,
  aNumber: PropTypes.number,
  aBool: PropTypes.bool,
  aFunc: PropTypes.func,
  aArray: PropTypes.array,
  aObject: PropTypes.object
};
export default CheckProps;
