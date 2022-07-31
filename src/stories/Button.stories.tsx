import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {Button} from "../components/Button";

export default {
  title: "Library/Button",
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <div style={{"width":"max-content", "minWidth":"120px" }}>
<Button {...args}/>
</div>;

export const button = Template.bind({});
button.args = {
  text: 'Button',
  variant:"button"
};


export const disabledButton = Template.bind({});
disabledButton.args = {
  text: 'Disabled Button',
  variant:"button",
  disabled: true,
};

export const checkbox = Template.bind({});
checkbox.args = {
  text: 'Checkbox Variant',
  variant:"checkbox"
};

export const disabledCheckbox = Template.bind({});
disabledCheckbox.args = {
  text: 'Disabled checkbox',
  variant:"checkbox",
  disabled: true,
};