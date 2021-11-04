import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ImageInput, Image } from 'components';
import 'components/Header/header.css';

export default {
  title: 'Example/ImageInput',
  component: ImageInput,
} as ComponentMeta<typeof ImageInput>;

const Template: ComponentStory<typeof ImageInput> = (args) => {
  const [source, setSource] = useState('https://pbs.twimg.com/media/BpOzsNxIIAADeqp.jpg');
  console.log(source);
  return (
    <div>
      <ImageInput onLoad={setSource} />;
      <Image src={source} alt={'image'} />
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
