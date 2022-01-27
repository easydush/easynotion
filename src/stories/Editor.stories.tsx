import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ContentEditor } from 'components';
import { MediaType } from 'types';

export default {
  title: 'Example/Editor',
  component: ContentEditor,
  argTypes: {
    backgroundColor: { control: 'color' },
    outlined: { control: 'boolean' },
  },
} as ComponentMeta<typeof ContentEditor>;

const Template: ComponentStory<typeof ContentEditor> = (args) => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/5">
        <ContentEditor {...args} />
      </div>
    </div>
  );
};

export const Text = Template.bind({});
Text.args = { type: MediaType.TEXT };

export const Table = Template.bind({});
Table.args = { type: MediaType.TABLE };
