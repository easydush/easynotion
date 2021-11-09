import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from 'components';

export default {
  title: 'Example/Header',
  component: Header,
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: false },
      defaultValue: 'Hello',
      description: 'demo description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Hello' },
      },
      control: {
        type: 'text'
      }
    }
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};
