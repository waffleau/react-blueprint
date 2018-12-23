import styled from 'styled-components';

import Style from '../../styles';

interface StyleProps {
  small?: number;
  medium?: number;
  large?: number;
  xlarge?: number;
  noPad?: boolean;
}

function calculateSmallSpan(props: StyleProps) {
  return props.small || 12;
}

function calculateMediumSpan(props: StyleProps) {
  return props.medium || calculateSmallSpan(props);
}

function calculateLargeSpan(props: StyleProps) {
  return props.large || calculateMediumSpan(props);
}

function calculateExtraLargeSpan(props: StyleProps) {
  return props.xlarge || calculateLargeSpan(props);
}

const mediumWidth = Style.vars.screenMedium;
const largeWidth = Style.vars.screenLarge;
const extraLargeWidth = Style.vars.screenExtraLarge;

export const Grid: any = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 8.33%);
  margin: 0 -0.5rem;
`;

export const Column = styled.div`
  grid-column-start: span ${(props: StyleProps) => calculateSmallSpan(props)};
  padding: ${props => (props.noPad ? 0 : '0 0.5rem')};

  @media (min-width: ${mediumWidth}) {
    grid-column-start: span ${(props: StyleProps) => calculateMediumSpan(props)};
  }

  @media (min-width: ${largeWidth}) {
    grid-column-start: span ${(props: StyleProps) => calculateLargeSpan(props)};
  }

  @media (min-width: ${extraLargeWidth}) {
    grid-column-start: span
      ${(props: StyleProps) => calculateExtraLargeSpan(props)};
  }
`;

Grid.Column = Column;

export default Grid;
