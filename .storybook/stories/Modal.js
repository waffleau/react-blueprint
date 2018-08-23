// @flow

import React, { Fragment } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import StateContainer from '../container';

import Modal from 'components/Core/Modal';

const Dialog = styled.div`
  background-color: white;
  margin: 5rem auto 0;
  max-width: 600px;
  padding: 1rem;
`;

const stories = storiesOf('Modal', module);

stories.add('dialog', () => (
  <StateContainer>
    {(state, onChange) => (
      <Fragment>
        <Modal
          isOpen={state.isOpen}
          onClose={() => onChange({ isOpen: false })}>
          <Dialog>Dialog</Dialog>
        </Modal>

        <a onClick={() => onChange({ isOpen: true })}>Open modal</a>
      </Fragment>
    )}
  </StateContainer>
));
