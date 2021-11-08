import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextEditor as Editor } from 'components';
import 'components/Header/header.css';

export default {
  title: 'Example/Editor',
  component: Editor,
} as ComponentMeta<typeof Editor>;

const Template: ComponentStory<typeof Editor> = (args) => <Editor />;

export const Basic = Template.bind({});
Basic.args = {};
