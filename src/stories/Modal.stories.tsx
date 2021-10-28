import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from '../components/Modal';


export default {
  title: 'Example/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isVisible, switchVisible] = useState(true);

  return (
    <Modal visible={isVisible} content={<div>Content</div>} title={'Modal'} onClose={() => switchVisible(false)} />
  );
};

export const Basic = Template.bind({});
Basic.args = {};
