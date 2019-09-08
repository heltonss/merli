import classnames from 'classnames';
import React from 'react';
import Style from './IconSearch.module.scss';

interface IOwnProps {
  isRounded: boolean;
  func(): void;
}

const IconSearch: React.FC<IOwnProps> = ({ isRounded, func }: IOwnProps) => {
  return (
    <i
      onClick={func}
      className={classnames([Style.container, { [`${Style.rounded}`]: isRounded }])}
    />
  );
};

export default IconSearch;
