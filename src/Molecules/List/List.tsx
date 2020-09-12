import React from 'react';
import { List as ListSemantic } from 'semantic-ui-react';
import { Label } from '../../Atoms/Label';

type TLabel = {
  name: String;
  color: String;
};

type Item = {
  title: String;
  labels: Array<TLabel>;
};

type List = {
  data: Array<Item>;
};

const List = ({ data = [] }: List) => {
  return (
    <ListSemantic celled>
      {data.map((item) => (
        <ListSemantic.Item>
          <ListSemantic.Content>
            <ListSemantic.Header>{item.title}</ListSemantic.Header>
            {item.labels.map(({ name, color }) => (
              <Label color={color}>{name}</Label>
            ))}
          </ListSemantic.Content>
        </ListSemantic.Item>
      ))}
    </ListSemantic>
  );
};

export default List;
