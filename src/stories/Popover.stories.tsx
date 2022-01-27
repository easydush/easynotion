import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Popover } from 'components';

export default {
  title: 'Example/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: { control: 'color' },
    outlined: { control: 'boolean' },
  },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/5">
        <Popover {...args} />
      </div>
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  controller: <div>Move mouse here...</div>,
  children: <div>Thanks!</div>,
};
