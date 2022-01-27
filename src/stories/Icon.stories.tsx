import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from 'components';
import { MediaType } from '../types';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => (
  <div className="p-4">
    <Icon {...args} />
    {args.type}
  </div>
);

export const Basic = () => (
  <div className="flex justify-items-start">
    <Template type="ADD" />
    <Template type="CLOSE" />
    <Template type="DELETE" />
    <Template type="DOWN" />
    <Template type="EDIT" />
    <Template type="EDIT_NOTE" />
    <Template type="IMAGE" />
    <Template type="LINK" />
    <Template type="SAVE" />
    <Template type="TABLE" />
    <Template type="TEXT" />
    <Template type="UP" />
    <Template type="VIDEO" />
  </div>
);
