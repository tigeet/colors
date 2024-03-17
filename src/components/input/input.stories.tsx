import type { Meta, StoryObj } from "@storybook/react";

import Input from "./input";
import React, { useState } from "react";
import { HexInput } from "./hexInput";

const meta: Meta<typeof Input> = {
  component: Input,
};
export default meta;
type Story = StoryObj<typeof Input>;

type Args = {
  placeholder: string;
};

const DefaultComponent = (args: Args) => {
  const [value, setValue] = useState<string>("");
  return <Input {...args} value={value} onChange={setValue} />;
};

const HexComponent = (args: Args) => {
  const [value, setValue] = useState<string>("");
  return <HexInput {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
  args: {
    placeholder: "Text value",
  },
  render: (args) => <DefaultComponent {...(args as Args)} />,
};

export const Hex: Story = {
  args: {
    placeholder: "Hex value",
  },
  render: (args) => <HexComponent {...(args as Args)} />,
};
