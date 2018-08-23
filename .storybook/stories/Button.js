// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import Button from 'components/Core/Button';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories
  .add('standard', () => {
    const label = text('Name', 'My button');
    return <Button onClick={action('clicked')}>{label}</Button>;
  })
  .add('disabled', () => (
    <Button isDisabled onClick={action('clicked')}>
      Disabled button
    </Button>
  ));
