// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components';

const SIZES = {
  small: '1rem',
  medium: '1.5rem',
  large: '2rem',
  xlarge: '2.5rem',
};

const Container = styled.div`
  display: flex;
  height: ${props => SIZES[props.size || 'medium']};
  position: relative;
  width: ${props => SIZES[props.size || 'medium']};

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
  size: string,
};

const ICONS = {
  chevron_left: require('react-icons/md').MdChevronLeft,
  close: require('react-icons/md').MdClear,
  columns: require('react-icons/md').MdViewWeek,
};

class Icon extends PureComponent<Props> {
  static defaultProps = {
    size: 'medium',
  };

  render() {
    const { name, size } = this.props;
    const IconComponent = ICONS[name];

    if (!IconComponent) {
      console.warn(`No icon: '${name}'`);
      return null;
    }

    return (
      <Container size={size}>
        <IconComponent />
      </Container>
    );
  }
}

export default Icon;
