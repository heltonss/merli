import classnames from 'classnames';
import React from 'react';
import Style from './Input.module.scss';

interface IOwnProps {
  placeholder: string;
  type: string;
  parentClassStyle?: string;
  getValue(value: string): void;
  onEnter?(): void;
}
type InputEvent = React.ChangeEvent<HTMLInputElement>;

const Input: React.FC<IOwnProps> = ({
  placeholder,
  type,
  getValue,
  parentClassStyle,
  onEnter = () => {},
}: IOwnProps) => {
  const getValueInput = (event: any) => {
    getValue(event.target.value);
  };

  const actionButtonEnter = (e: any) => {
    e.preventDefault();
    if (e.key === 'Enter' || e.keycode === 13) {
      onEnter();
    }
  };
  return (
    <input
      className={classnames([Style.container, parentClassStyle])}
      type={type}
      placeholder={placeholder}
      onChange={getValueInput}
      onKeyUp={actionButtonEnter}
    />
  );
};

export default Input;
