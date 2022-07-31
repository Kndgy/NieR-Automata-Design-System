import React from "react";
import { ComponentMeta } from "@storybook/react";
import {YorhaNavLink} from "../components/YorhaNavLink";
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Library/YorhaNavLink',
  component: YorhaNavLink,
  decorators: [withRouter],
} as ComponentMeta<typeof YorhaNavLink>;

export const Test = () => <div>
  <YorhaNavLink text="aaaabbb" to="" />
  <YorhaNavLink text="aaaabbb" to="aa" disabled={true}/>
</div>;
Test.story = {
  parameters: {
  }
}