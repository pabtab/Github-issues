import React from 'react';
import 'styles.css';

type Label = {
  color: String;
  children: String;
};

const Label = ({ color = '#0000ff', children }: Label) => {
  return (
    <span className="Label" style={{backgroundColor: `#${color}`}}>{children}</span>
  );
};

export default Label;
