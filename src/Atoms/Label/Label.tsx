import React from 'react';
import './styles.css';

type LabelProps = {
  color?: String;
  children: String;
}

const Label = ({ color = '#0000ff', children }: LabelProps) => {
  return (
    <span className="Label" style={{backgroundColor: `#${color}`}}>{children}</span>
  );
};

export default Label;
