import React from 'react';

const AButton = ({ clicks, disabled, text, onClick }) => {
  return (
    <section>
      <p>{clicks}</p>
      <button disabled={disabled} onClick={onClick}>
        {text}
      </button>
    </section>
  );
};

export default AButton;
