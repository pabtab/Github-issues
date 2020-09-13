import React from 'react';
import { List as ListSemantic } from 'semantic-ui-react';
import { Label } from '../../Atoms/Label';

type TLabel = {
  title: String;
  color: String;
  id: Number;
};

type Item = {
  title: String;
  labels: Array<TLabel>;
};

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
            {item.labels.map(({ title, color, id }) => (
              <Label color={color} key={id.toString()}>
                {title}
              </Label>
            ))}
          </ListSemantic.Content>
        </ListSemantic.Item>
      ))}
    </ListSemantic>
  );
};

export default List;
