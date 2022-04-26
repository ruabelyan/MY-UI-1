/* eslint-disable import/no-extraneous-dependencies */
import { Button } from '@/components/button';
import { Div } from '@/index';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TITLES } from '../configs';

export default {
  title: `${TITLES.MAIN_TITLE}/Button`,
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Div> = args => (
  <>
    {/* <Button {...args} /> */}

    <Button presets={['primary', 'xs']}>Button</Button>
  </>
);

export const Default = Template.bind({});

Default.args = {
  children: 'Button',
};
