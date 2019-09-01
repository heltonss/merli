import React from 'react';
import Style from './IconSearch.module.scss';
import classnames from 'classnames';

interface IOwnProps {
  isRounded: boolean;
}

const IconSearch = ({ isRounded }: IOwnProps) => {
  return <i className={classnames([Style.container, { [`${Style.rounded}`]: isRounded }])} />;
};

export default IconSearch;
