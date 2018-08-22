// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 1rem;
  position: relative;
  width: 1rem;

  > * {
    left: 0;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

type Props = {
  name: string,
};

const ICONS = {
  chevron_left: require('react-icons/md').MdChevronLeft,
  close: require('react-icons/md').MdClear,
  columns: require('react-icons/md').MdViewWeek,
};

class Icon extends PureComponent<Props> {
  render() {
    const { name } = this.props;
    const IconComponent = ICONS[name];

    if (!IconComponent) {
      console.warn(`No icon: '${name}'`);
      return null;
    }

    return (
      <Container>
        <IconComponent />
      </Container>
    );
  }
}

export default Icon;
