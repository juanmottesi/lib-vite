import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './index';
import { numericMask } from '../../utils/masks';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XS6eYLoAUGg6QDWqdAeAAv/PeppinoDS-v2.7?type=design&node-id=1802-1659&mode=design&t=9QX0vhPCBpkBQgDQ-4',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select' },
    disabled: { control: 'boolean' },
    autoFocus: { control: 'boolean' },
    onClick: { action: 'clicked' },
    className: { control: 'text' },
    prefix: { control: 'text' },
    postfix: { control: 'text' },
  },
  args: {
    placeholder: 'Placeholder',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NumericMask: Story = {
  args: {
    mask: (value: string) => numericMask(value, { maxIntegers: 10, maxDecimals: 2, thousandsSeparator: '.', decimalSeparator: ',' }),
  },
};
