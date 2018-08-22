// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import Card from 'components/Card';

const stories = storiesOf('Card', module);

stories.addDecorator(withKnobs);

stories
  .add('with header', () => (
    <Card>
      <Card.Header>Header goes here</Card.Header>
    </Card>
  ))
  .add('with title', () => (
    <Card>
      <Card.Header>
        <Card.Title>Title text</Card.Title>
      </Card.Header>
    </Card>
  ))
  .add('with content', () => (
    <Card>
      <Card.Content>Content goes here</Card.Content>
    </Card>
  ))
  .add('with header and content', () => (
    <Card>
      <Card.Header>
        <Card.Title>Title text</Card.Title>
      </Card.Header>
      <Card.Content>Content goes here</Card.Content>
    </Card>
  ));
