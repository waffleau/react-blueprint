// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import StateContainer from '../container';

import TextInput from '../../src/components/Core/TextInput';

const stories = storiesOf('TextInput', module);

stories
  .add('standard', () => (
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
  ))
  .add('disabled', () => (
    <StateContainer>
      {(state, onChange) => (
        <TextInput
          isDisabled
          label="Input field"
          name="input"
          placeholder="Type some text"
          value="I am disabled"
          onChange={(name: string, value: any) => onChange({ [name]: value })}
        />
      )}
    </StateContainer>
  ));
