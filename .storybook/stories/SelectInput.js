// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import StateContainer from '../container';

import SelectInput from 'components/Core/SelectInput';

const stories = storiesOf('SelectInput', module);

stories
  .add('standard', () => (
    <StateContainer>
      {(state, onChange) => (
        <SelectInput
          label="Select field"
          name="select"
          options={[['Option 1', 1], ['Option 2', 2]]}
          value={state.select}
          onChange={(name: string, value: any) => onChange({ [name]: value })}
        />
      )}
    </StateContainer>
  ))
  .add('with default option', () => (
    <StateContainer>
      {(state, onChange) => (
        <SelectInput
          label="Select field"
          name="select"
          options={[['-- All', null], ['Option 1', 1], ['Option 2', 2]]}
          value={state.select}
          onChange={(name: string, value: any) => onChange({ [name]: value })}
        />
      )}
    </StateContainer>
  ));
