import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Button.module.scss';

interface IOwnProps {
  label: string;
  route?: string;
  func?: any;
  parentClassStyle?: string;
}

const Button: React.FC<IOwnProps> = ({ label, route, func, parentClassStyle = '' }: IOwnProps) => {
  return route ? (
    <Link className={classNames([Style.container, parentClassStyle])} to={route}>
      {label}
    </Link>
  ) : (
    <button onClick={func} className={Style.container}>
      {label}
    </button>
  );
};

export default Button;
