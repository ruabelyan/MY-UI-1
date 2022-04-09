// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../index';
import { SHARED_ARG_TYPES, TITLES } from '../configs';

export default {
  title: `${TITLES.MAIN_TITLE}/Button`,
  component: Button,
  argTypes: {
    color: SHARED_ARG_TYPES.color,
    size: SHARED_ARG_TYPES.size,
    direction: SHARED_ARG_TYPES.direction,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: 'md',
};
