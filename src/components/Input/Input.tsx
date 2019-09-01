import classnames from 'classnames';
import React from 'react';
import Style from './Input.module.scss';

interface IOwnProps {
  placeholder: string;
  type: string;
  parentClassStyle?: string;
  getValue(value: string): void;
}

const Input = ({ placeholder, type, getValue, parentClassStyle }: IOwnProps) => {
  const getValueInput = (event: any) => {
    getValue(event.target.value);
  };
  return (
    <input
      className={classnames([Style.container, parentClassStyle])}
      type={type}
      placeholder={placeholder}
      onChange={getValueInput}
    />
  );
};

export default Input;
