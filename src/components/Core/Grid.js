// @flow

import styled from 'styled-components';

import Style from 'styles';

function calculateSmallSpan(props: Object) {
  return props.small || 12;
}

function calculateMediumSpan(props: Object) {
  return props.medium || calculateSmallSpan(props);
}

function calculateLargeSpan(props: Object) {
  return props.large || calculateMediumSpan(props);
}

function calculateExtraLargeSpan(props: Object) {
  return props.xlarge || calculateLargeSpan(props);
}

const mediumWidth = Style.vars.screenMedium;
const largeWidth = Style.vars.screenLarge;
const extraLargeWidth = Style.vars.screenExtraLarge;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 8.33%);
  margin: 0 -0.5rem;
`;

export const Column = styled.div`
  grid-column-start: span ${props => calculateSmallSpan(props)};
  padding: ${props => (props.noPad ? 0 : '0 0.5rem')};

  @media (min-width: ${mediumWidth}) {
    grid-column-start: span ${props => calculateMediumSpan(props)};
  }

  @media (min-width: ${largeWidth}) {
    grid-column-start: span ${props => calculateLargeSpan(props)};
  }

  @media (min-width: ${extraLargeWidth}) {
    grid-column-start: span ${props => calculateExtraLargeSpan(props)};
  }
`;

Grid.Column = Column;

export default Grid;
