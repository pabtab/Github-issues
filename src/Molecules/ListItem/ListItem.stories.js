// Label.stories.tsx
import React from 'react';
import { ListItem } from '.';

// This default export determines where you story goes in the story list
export default {
  title: 'List Item',
  component: ListItem,
};

const Template = (args) => <ListItem {...args} />;

export const Simple = Template.bind({});
export const WithLabels = Template.bind({});

Simple.args = {
  /* the args you need here will depend on your component */
  labels: [],
  id: 333,
  title: 'Story item'
};

WithLabels.args = {
  /* the args you need here will depend on your component */
  labels: [{
    id: 111,
    name: 'Bug story',
    color: '00ff00'
  }],
  id: 333,
  title: 'Story item labels'
};