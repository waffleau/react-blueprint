import styled from 'styled-components';

import Style from 'styles';

export const FormField = styled.div`
  color: ${Style.vars.textColorDark};
  padding-top: ${props => (props.hideLabel ? 0 : '1rem')};
  position: relative;
  width: 100%;

  > label {
    display: ${props => (props.hideLabel ? 'none' : 'block')};
  }

  > input::placeholder {
    color: ${Style.vars.placeholderColor};
  }
`;

export default FormField;
