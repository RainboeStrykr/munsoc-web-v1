"use client";

import { Meta, StoryObj } from "@storybook/react";
import { Speaker } from "@/components/speaker/Speaker";

const meta: Meta<typeof Speaker> = {
  title: "Speaker",
  component: Speaker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    profilePhoto: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Vitalik_Buterin_TechCrunch_London_2015_%28cropped%29.jpg",
    name: "Vitalik Buterin",
    url: "https://google.com",
  },
};

export const WithLink: Story = {
  args: {
    profilePhoto: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Vitalik_Buterin_TechCrunch_London_2015_%28cropped%29.jpg",
    name: "Vitalik Buterin",
    url: "https://google.com",
  },
};
