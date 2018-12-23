// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from '../../src/components/Core/Card';

const stories = storiesOf('Card', module);

stories
  .add('standard', () => (
    <Card>
      <Card.Header>
        <Card.Title>Title text</Card.Title>
      </Card.Header>
      <Card.Content>Content goes here</Card.Content>
    </Card>
  ))
  .add('standard with footer', () => (
    <Card>
      <Card.Header>
        <Card.Title>Title text</Card.Title>
      </Card.Header>
      <Card.Content>Content goes here</Card.Content>
      <Card.Footer>
        <a>Action</a>
      </Card.Footer>
    </Card>
  ));
