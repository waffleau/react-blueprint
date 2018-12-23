import styled from 'styled-components';

interface Props {
  alignItems?: string;
  direction?: string;
  justifyContent?: string;
  width?: string;
}

export const Flex = styled.div`
  align-items: ${(props: Props) => props.alignItems || 'center'};
  display: flex;
  flex-direction: ${(props: Props) => props.direction || 'row'};
  justify-content: ${(props: Props) => props.justifyContent || 'space-between'};
  width: ${(props: Props) => props.width || '100%'};
`;

export default Flex;
