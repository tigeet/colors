import type { Meta, StoryObj } from "@storybook/react";

import Preview from "./preview";
import React from "react";
const meta: Meta<typeof Preview> = {
  component: Preview,
};
export default meta;
type Story = StoryObj<typeof Preview>;

export const Default: Story = {
  argTypes: {
    hex: {
      control: "text",
    },
    size: {
      control: { type: "select" },
    },
  },
  args: {
    size: 32,
    hex: "#36494E",
  },
  render: (args) => <Preview {...args} />,
};
