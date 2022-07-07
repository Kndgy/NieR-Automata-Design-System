import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {YorhaNavLink} from "../components/yorhaNavLink";
import { BrowserRouter } from "react-router-dom";

export default {
  title: 'Library/YorhaNavLink',
  component: YorhaNavLink
} as ComponentMeta<typeof YorhaNavLink>;

const Template: ComponentStory<typeof YorhaNavLink> = (args) => <BrowserRouter>
  <div style={{"height":"80px"}}><YorhaNavLink {...args} /></div>
</BrowserRouter>;

export const yorhaNavLink = Template.bind({});
yorhaNavLink.args = {
  text: "YorhaNavLink",
};
