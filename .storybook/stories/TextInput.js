// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import StateContainer from '../container';

import TextInput from 'components/Core/TextInput';

const stories = storiesOf('TextInput', module);

stories.add('with text', () => (
  <StateContainer>
    {(state, onChange) => (
      <TextInput
        label="Input field"
        name="input"
        placeholder="Type some text"
        value={state.input}
        onChange={(name: string, value: any) => onChange({ [name]: value })}
      />
    )}
  </StateContainer>
));
