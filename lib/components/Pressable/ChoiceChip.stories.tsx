import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ChoiceChip } from './ChoiceChip';

const meta = {
  title: 'Components/ChoiceChip',
  component: ChoiceChip,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/XS6eYLoAUGg6QDWqdAeAAv/PeppinoDS-v2.7?node-id=6002-29326&t=qWTCdT3IWPNKLpRB-4',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select' },
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
    className: { control: 'text' },
  },
  args: {
    id: 'action',
    children: 'Default',
    size: 'md',
    onClick: fn(),
  },
} satisfies Meta<typeof ChoiceChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
