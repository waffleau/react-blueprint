// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from '../../src/components/Core/Icon';

const stories = storiesOf('Icon', module);

stories
  .add('small', () => <Icon name="close" size="small" />)
  .add('medium', () => <Icon name="close" size="medium" />)
  .add('large', () => <Icon name="close" size="large" />)
  .add('xlarge', () => <Icon name="close" size="xlarge" />);
