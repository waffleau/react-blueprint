// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';
import styled from 'styled-components';

import Style from 'styles';

const Container = styled.button`
  background-color: ${Style.colors.primary};
  border-radius: 3px;
  box-shadow: ${Style.vars.boxShadow1};
  color: white;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  transition: background-color 0.2s, box-shadow 0.2s, color 0.2s;

  &:hover {
    background-color: ${Style.utils.darken(Style.colors.primary, 0.1)};
    box-shadow: ${Style.vars.boxShadow2};
  }
`;

type Props = {
  children: Node,
  disabled?: boolean,
  onClick: any,
};

class Button extends PureComponent<Props> {
  render() {
    const { children, disabled, onClick } = this.props;
    return (
      <Container disabled={disabled} onClick={onClick}>
        {children}
      </Container>
    );
  }
}

export default Button;
