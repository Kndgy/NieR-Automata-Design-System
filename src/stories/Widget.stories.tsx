import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {Widget} from "../components/Widget";

export default {
  title: 'Library/Widget',
  Component: Widget
} as ComponentMeta<typeof Widget>;

const Template: ComponentStory<typeof Widget> = (args) => <div style={{"width":"500px", height:"300px"}}><Widget {...args} /></div>;

export const primary = Template.bind({});
primary.args = {
  title:"title one",
  content:"primary content lol"
};

export const secondary = Template.bind({});
secondary.args = {
  dark: true,
  title:"title two",
  content:"content lol"
};