import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Style from '../../styles';

interface StyleProps {
  isOpen: boolean;
}

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const Activator = styled.div`
  background-color: ${(props: StyleProps) =>
    props.isOpen ? 'rgba(0, 0, 0, 0.02)' : 'inherit'};
  border-radius: ${Style.vars.borderRadius};
  display: inline-block;
  position: relative;
  transition: background-color 0.2s;
  user-select: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;

const MenuContainer = styled.div`
  left: ${(props: StyleProps) => (props.isOpen ? 0 : -9999)}px;
  margin: 0.5rem 0 0 0;
  min-width: 100%;
  opacity: ${(props: StyleProps) => (props.isOpen ? 1 : 0)};
  position: absolute;
  transition: ${(props: StyleProps) =>
    props.isOpen ? 'left 0s, opacity 0.2s' : 'left 0s linear .2s, opacity .2s'};
  z-index: 10;
`;

export const Menu = styled.ul`
  background-color: white;
  border: ${Style.vars.border};
  border-radius: ${Style.vars.borderRadius};
  box-shadow: ${Style.vars.boxShadow1};
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 10;
`;

export const Item = styled.li`
  border-bottom: ${Style.vars.border};
  font-size: ${Style.type.paragraph};
  transition: background-color 0.2s;
  white-space: nowrap;

  &:last-child {
    border: none;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }

  > a {
    color: ${Style.vars.textColorDark};
    display: block;
    padding: 1rem;
  }
`;

interface Props {
  activator: JSX.Element;
  children: JSX.Element;
}

interface State {
  isOpen: boolean;
}

export class Dropdown extends PureComponent<Props, State> {
  static Item = Item;
  static Menu = Menu;

  state = {
    isOpen: false,
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleToggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { activator, children } = this.props;
    const { isOpen } = this.state;

    return (
      <Container onBlur={this.handleClose}>
        <Activator isOpen={isOpen} tabIndex={0} onClick={this.handleToggle}>
          {activator}
        </Activator>

        <MenuContainer isOpen={isOpen}>{children}</MenuContainer>
      </Container>
    );
  }
}

export default Dropdown;
