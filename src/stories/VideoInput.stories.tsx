import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Video, VideoInput } from 'components';


export default {
  title: 'Example/VideoInput',
  component: VideoInput,
} as ComponentMeta<typeof VideoInput>;

const Template: ComponentStory<typeof VideoInput> = (args) => {
  const [source, setSource] = useState('');
  return (
    <div>
      <VideoInput onChange={setSource} />
      <Video src={source} />
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
