import React from 'react';
import { List as ListSemantic } from 'semantic-ui-react';
import { Label } from '../../Atoms/Label';
import { Item } from '../../types/types';

type ListProps = {
  data: Array<Item>;
};

const List = ({ data = [] }: ListProps) => {
  return (
    <ListSemantic celled>
      {data.map((item) => (
        <ListSemantic.Item>
          <ListSemantic.Content>
            <ListSemantic.Header>{item.title}</ListSemantic.Header>
            {item.labels.map(({ name, color, id }) => (
              <Label color={color} key={id.toString()}>
                {name}
              </Label>
            ))}
          </ListSemantic.Content>
        </ListSemantic.Item>
      ))}
    </ListSemantic>
  );
};

export default List;
