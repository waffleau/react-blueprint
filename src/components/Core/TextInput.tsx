import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Style from '../../styles';

import FormField from './FormField';
import Label from './InputLabel';

const Input = styled.input`
  background-color: white;
  border: ${Style.vars.border};
  border-radius: ${Style.vars.borderRadius};
  color: ${Style.vars.textColorDark};
  font-size: ${Style.type.paragraph};
  padding: 0.5rem;
  transition: border-color 0.2s;
  width: 100%;

  &:focus {
    border-color: ${Style.colors.primary};
  }

  &:disabled {
    background-color: #eee;
    color: ${Style.vars.disabledColor};
  }

  &::placeholder {
    color: ${Style.vars.placeholderColor};
    opacity: 1;
  }
`;

interface Event {
  target: {
    name: string;
    value: string;
  };
}

export interface Props {
  isDisabled?: boolean;
  label?: string;
  name: string;
  placeholder?: string;
  type?: string;
  value: string | null;
  onChange: (arg0: string, arg1: string) => void;
}

export class TextInput extends PureComponent<Props> {
  static defaultProps = {
    type: 'text',
  };

  handleChange = (event: Event) => {
    const { name, value } = event.target;

    this.props.onChange(name, value);
  };

  render() {
    const { isDisabled, label, name, placeholder, type, value } = this.props;

    return (
      <FormField isDisabled={isDisabled}>
        <Input
          disabled={isDisabled}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value || ''}
          onChange={this.handleChange}
        />
        <Label htmlFor={name}>{label}</Label>
      </FormField>
    );
  }
}

export default TextInput;
