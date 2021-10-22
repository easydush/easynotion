import React from 'react';


import '../components/Header/header.css';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {TextInput} from '../components/TextInput';

export default {
    title: 'Example/TextInput',
    component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput/>;

export const Basic = Template.bind({});
Basic.args = {
};
