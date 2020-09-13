import React from 'react';
import { Input as InputSemantic } from 'semantic-ui-react';

type props = {
  onChange: React.FormEventHandler<HTMLInputElement>
}

const Input = ({ onChange }: props) => {
  return (
    <div>
      <InputSemantic onChange={onChange} />
    </div>
  );
};

export default Input;
