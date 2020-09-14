// Label.stories.tsx
import React from 'react';
import { Label } from '.';

// This default export determines where you story goes in the story list
export default {
  title: 'Label',
  component: Label,
};

const Template = (args) => <Label {...args} >Story </Label>;

export const CustomColor = Template.bind({});

CustomColor.args = {
  /* the args you need here will depend on your component */
  color: '00ffff'
};