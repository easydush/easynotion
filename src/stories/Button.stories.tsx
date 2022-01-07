import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from 'components';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Basic',
  outlined: true,
};
