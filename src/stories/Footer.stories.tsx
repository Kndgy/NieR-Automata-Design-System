import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {Footer} from '../components/Footer';

export default {
  title: 'Library/Footer',
  Component: Footer
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <div style={{height:"80px"}}><Footer {...args} /></div>;

export const footer = Template.bind({});
footer.args = {
  text:"footer"
};

