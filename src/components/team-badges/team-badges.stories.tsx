import type { Meta, StoryObj } from '@storybook/react';

import TeamBadges from './team-badges';

const meta = {
  component: TeamBadges,
} satisfies Meta<typeof TeamBadges>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};