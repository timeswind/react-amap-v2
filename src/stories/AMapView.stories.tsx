import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import AMapView, {IAmapViewProps} from '../index';

export default {
  title: 'AMapView',
  component: AMapView,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<IAmapViewProps> = (args) => <AMapView {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    jsKey: 'aab0eea147c055ea496c8a9a615f5414'
};

export const CoordinateHangZhou = Template.bind({});
CoordinateHangZhou.args = {
    jsKey: 'aab0eea147c055ea496c8a9a615f5414',
    coordinates: [119.7337903, 30.1865171]
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
