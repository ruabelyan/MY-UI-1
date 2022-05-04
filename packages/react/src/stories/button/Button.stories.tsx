/* eslint-disable import/no-extraneous-dependencies */
import { Button } from '@/components/button';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TITLES } from '../configs';
import { Icon } from '@my-ui/icons';

export default {
  title: `${TITLES.MAIN_TITLE}/Button`,
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
  <>
    <Button {...args}>Button</Button>

    <Icon />
  </>
);

export const Default = Template.bind({});

Default.args = {
  children: 'Button',
};
