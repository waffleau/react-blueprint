import styled from 'styled-components';

import Style from 'styles';

export const FormField = styled.div`
  color: ${Style.vars.textColorDark};
  padding-top: 1rem;
  position: relative;
  width: 100%;

  > label {
    color: ${props =>
      props.isDisabled ? Style.vars.disabledColor : 'inherit'};
    display: block;
  }

  > input::placeholder {
    color: ${Style.vars.placeholderColor};
  }
`;

export default FormField;
