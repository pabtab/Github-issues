import React from 'react';
import { Label } from '../../Atoms/Label';
import { Item } from '../../types/types';

const ListItem = ({ title, labels, id }: Item) => {
  return (
    <div key={id.toString()} className="Item">
      <h3>{title}</h3>
      <span className="labels">
        {
          labels.map(label => (
            <Label key={label.id} color={label.color}>{label.name}</Label>
          ))
        }
      </span>
    </div>
  );
};

export default ListItem;
