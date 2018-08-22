// @flow

import styled from 'styled-components';

export const Flex = styled.div`
  align-items: ${props => props.alignItems || 'center'};
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justifyContent || 'space-between'};
  width: ${props => props.width || '100%'};
`;

export default Flex;
