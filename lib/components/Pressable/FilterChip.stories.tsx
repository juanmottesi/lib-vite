import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { FilterChip } from './FilterChip';

const meta = {
  title: 'Components/FilterChip',
  component: FilterChip,
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
    label: 'Default',
    options: [{ name: 'Default' }, { name: 'Default2' }],
    onClick: fn(),
  },
} satisfies Meta<typeof FilterChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
