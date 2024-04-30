import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const div = (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />;

const meta = {
  title: 'Classes/Typografy',
  component: div,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XS6eYLoAUGg6QDWqdAeAAv/PeppinoDS-v2.7?type=design&node-id=1802-1659&mode=design&t=9QX0vhPCBpkBQgDQ-4',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      options: [
        'font-headline-xl', 'font-headline-lg', 'font-headline-md', 'font-headline-sm', 'font-headline-xs',
        'font-subheadline-xl', 'font-subheadline-lg', 'font-subheadline-md', 'font-subheadline-sm', 'font-subheadline-xs',
        'font-highlight-xl', 'font-highlight-lg', 'font-highlight-md', 'font-highlight-sm', 'font-highlight-xs',
        'font-body-xl', 'font-body-lg', 'font-body-md', 'font-body-sm', 'font-body-xs',
      ],
      control: { type: 'select' },
    },
  },
  args: {
    children: 'Default',
  },
} satisfies Meta<typeof div>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'font-headline-xl',
    children: 'Título',
  },
};
