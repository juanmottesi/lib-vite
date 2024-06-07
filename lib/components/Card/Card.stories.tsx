import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './index';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XS6eYLoAUGg6QDWqdAeAAv/PeppinoDS-v2.7?type=design&node-id=1802-1659&mode=design&t=9QX0vhPCBpkBQgDQ-4',
    },
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    children: 'Default',
    className: 'font-body-md',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active: Story = {
  args: {},
};
