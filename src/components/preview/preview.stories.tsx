import type { Meta, StoryObj } from "@storybook/react";

import Preview from "./preview";
import React from "react";
const meta: Meta<typeof Preview> = {
  component: Preview,
};
export default meta;
type Story = StoryObj<typeof Preview>;

export const Default: Story = {
  render: () => <Preview hex="#36494E" />,
};
