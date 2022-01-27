import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToggleSwitch } from 'components';

export default {
  title: 'Example/ToggleSwitch',
  component: ToggleSwitch,
  argTypes: {
    backgroundColor: { control: 'color' },
    outlined: { control: 'boolean' },
  },
} as ComponentMeta<typeof ToggleSwitch>;

const Template: ComponentStory<typeof ToggleSwitch> = (args) => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/5">
        <ToggleSwitch {...args} />
      </div>
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = { value: true };
