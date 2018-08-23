// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Style from 'styles';

import FormField from 'components/Core/FormField';
import Label from 'components/Core/InputLabel';

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

  &::placeholder {
    color: ${Style.vars.placeholderColor};
    opacity: 1;
  }
`;

export type Props = {
  hideLabel?: boolean,
  isDisabled?: boolean,
  label?: string,
  name: string,
  placeholder?: string,
  type?: string,
  value: ?string,
  onChange: (string, string) => void,
};

export class TextInput extends PureComponent<Props> {
  static defaultProps = {
    type: 'text',
  };

  handleChange = (event: Object) => {
    const { name, value } = event.target;

    this.props.onChange(name, value);
  };

  render() {
    const {
      hideLabel,
      isDisabled,
      label,
      name,
      placeholder,
      type,
      value,
    } = this.props;

    return (
      <FormField hideLabel={hideLabel || !label}>
        <Input
          disabled={isDisabled}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value || ''}
          onChange={this.handleChange} />
        <Label htmlFor={name}>{label}</Label>
      </FormField>
    );
  }
}

export default TextInput;
