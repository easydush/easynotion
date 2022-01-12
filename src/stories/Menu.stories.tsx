import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon, Menu, NoteLink } from 'components';
import { TreeItem } from '../types';

export default {
  title: 'Example/Menu',
  component: Menu,
  argTypes: {
    backgroundColor: { control: 'color' },
    outlined: { control: 'boolean' },
  },
} as ComponentMeta<typeof Menu>;


const Template: ComponentStory<typeof Menu> = (args) =>
  <div className='flex flex-row'>
    <div className='basis-1/5'>
      <Menu {...args} />
    </div>
  </div>;

export const Basic = Template.bind({});
Basic.args = {
  tree: [{
    key: '1',
    title: 'Root',
    path: '',
    isRoot: true,
    nodes: [{ key: '2', title: 'Child 1', path: '', isRoot: false, nodes: [] }],
  }],
  nodeRender: (node: TreeItem) =>
    <div
      className={`p-2 flex justify-between rounded-full outline-2 outline-offset-2 outline-cyan-200 
      outline-dotted cursor-pointer`}>
      {node.title}
    </div>,
};
