import styled from 'styled-components';

import Style from '../../styles';

export const InputLabel = styled.label`
  color: ${Style.vars.textColorDark};
  font-size: 0.85rem;
  font-weight: 400;
  left: 0.1rem;
  pointer-events: none;
  position: absolute;
  top: -0.3rem;
`;

export default InputLabel;
