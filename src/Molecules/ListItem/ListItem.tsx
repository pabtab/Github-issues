import React from 'react';
import { Label } from '../../Atoms/Label';

type ListItemProps = {
  title: String
  color: String
  label: String
}

const ListItem = ({ title, color, label }: ListItemProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <Label color={color}>{label}</Label>
    </div>
  );
};

export default ListItem;
