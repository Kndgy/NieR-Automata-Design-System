import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {Title} from '../components/Title'

export default {
  title: 'Library/Title',
  Component: Title
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <div style={{height:"80px"}}><Title {...args} /></div>;

export const title = Template.bind({});
title.args = {
  text:"TITLE"
};
