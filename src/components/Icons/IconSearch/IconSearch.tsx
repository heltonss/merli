import classnames from 'classnames';
import React from 'react';
import Style from './IconSearch.module.scss';

interface IOwnProps {
  isRounded: boolean;
}

const IconSearch: React.FC<IOwnProps> = ({ isRounded }: IOwnProps) => {
  return <i className={classnames([Style.container, { [`${Style.rounded}`]: isRounded }])} />;
};

export default IconSearch;
