import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {Bar} from "../components/Bar";

export default {
  title: 'Library/Bar',
  component: Bar
} as ComponentMeta<typeof Bar>;

const Template: ComponentStory<typeof Bar> = (args) => <div style={{"height":"80px"}}><Bar {...args} /></div>;

export const bar = Template.bind({});
bar.args = {};

export const dark = Template.bind({});
dark.args = {
  dark: true
};