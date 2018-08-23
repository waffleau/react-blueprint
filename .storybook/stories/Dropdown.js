// @flow

import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import StateContainer from '../container';

import { Dropdown, Menu, Item } from 'components/Core/Dropdown';

const Activator = styled.a`
  display: block;
  min-width: 200px;
`;

const stories = storiesOf('Dropdown', module);

stories.add('standard', () => (
  <StateContainer>
    {(state, onChange) => (
      <Dropdown activator={<Activator>Click me to open dropdown</Activator>}>
        <Menu>
          <Item>
            <a>Item 1</a>
          </Item>
          <Item>
            <a>Item 2</a>
          </Item>
        </Menu>
      </Dropdown>
    )}
  </StateContainer>
));
