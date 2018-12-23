import React, { PureComponent } from 'react';
import styled from 'styled-components';

interface StyleProps {
  size?: string;
}

interface DynamicObject {
  [key: string]: any;
}

function getSize(size: string) {
  const sizes: DynamicObject = {
    small: '1rem',
    medium: '1.5rem',
    large: '2rem',
    xlarge: '2.5rem',
  };
  return sizes[size];
}

const Container = styled.div`
  display: flex;
  height: ${(props: StyleProps) => getSize(props.size || 'medium')};
  position: relative;
  width: ${(props: StyleProps) => getSize(props.size || 'medium')};

  > * {
    left: 0;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

interface IconMap {
  [key: string]: any;
}

const ICONS: IconMap = {
  chevron_left: require('react-icons/md').MdChevronLeft,
  close: require('react-icons/md').MdClear,
  columns: require('react-icons/md').MdViewWeek,
};

interface Props {
  name: string;
  size: string;
}

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
