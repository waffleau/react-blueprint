import React, { PureComponent } from 'react';
import styled from 'styled-components';

interface StyleProps {
  isOpen: boolean;
}

const Container = styled.div`
  left: ${(props: StyleProps) => (props.isOpen ? 0 : '-200vw')};
  height: 100vh;
  position: fixed;
  top: 0;
  transition: ${(props: StyleProps) =>
    props.isOpen ? 'left 0s' : 'left 0s linear .3s'};
  width: 100vw;
  z-index: 10;
`;

const Overlay = styled.div`
  background-color: black;
  height: 100%;
  opacity: ${(props: StyleProps) => (props.isOpen ? 0.88 : 0)};
  position: absolute;
  transition: opacity 0.3s;
  width: 100%;
`;

const Dialog = styled.div`
  height: 100vh;
  position: absolute;
  width: 100vw;
  z-index: 11;
`;

interface Props {
  children: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
}

class Modal extends PureComponent<Props> {
  render() {
    const { children, isOpen, onClose } = this.props;
    return (
      <Container isOpen={isOpen}>
        <Overlay isOpen={isOpen} />

        <Dialog onClick={onClose}>{children}</Dialog>
      </Container>
    );
  }
}

export default Modal;
