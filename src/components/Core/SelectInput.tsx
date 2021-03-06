import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Style from '../../styles';

import FormField from './FormField';
import Label from './InputLabel';

const Select = styled.select`
  background-color: white;
  border: ${Style.vars.border};
  border-radius: ${Style.vars.borderRadius};
  color: ${Style.vars.textColorDark};
  font-size: ${Style.type.paragraph};
  padding: 6px 2.4rem 6px 0.8rem;
  width: 100%;

  &:focus {
    border-color: ${Style.colors.primary};
  }
`;

const Arrow = styled.span`
  bottom: 15px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid ${Style.vars.textColorDark};
  height: 0;
  pointer-events: none;
  position: absolute;
  right: 1rem;
  width: 0;
`;

interface Event {
  target: {
    name: string;
    value: string;
  };
}

interface Props {
  hideLabel?: boolean;
  isDisabled?: boolean;
  label?: string;
  name: string;
  options: Array<[string, string | number | undefined]>;
  placeholder?: string;
  value: string | number | null;
  onChange: (arg0: string, arg1: string) => void;
}

export class SelectInput extends PureComponent<Props> {
  handleChange = (event: Event) => {
    const { name, value } = event.target;

    this.props.onChange(name, value);
  };

  render() {
    const {
      hideLabel,
      isDisabled,
      label,
      name,
      options,
      placeholder,
      value,
    } = this.props;

    return (
      <FormField>
        <Select
          disabled={isDisabled}
          id={name}
          name={name}
          onChange={this.handleChange}
          value={value || ''}>
          {placeholder && <option>{placeholder}</option>}
          {options.map(option => (
            <option key={option[1]} value={option[1]}>
              {option[0]}
            </option>
          ))}
        </Select>
        <Label htmlFor={name}>{label}</Label>
        <Arrow />
      </FormField>
    );
  }
}

export default SelectInput;
