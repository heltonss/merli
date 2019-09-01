import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Breadcrumbs.module.scss';

const Breadcrumbs: React.FC = () => {
  return (
    <>
      <Link className={Style.link} to="/eletronica">
        eletronica
      </Link>
      <Link className={Style.link} to="/eletronica">
        eletronica 2
      </Link>
      <Link className={Style.link} to="/eletronica 3">
        eletronica duarte
      </Link>
      <Link className={Style.link} to="/eletronica 4">
        eletronica teste
      </Link>
    </>
  );
};

export default Breadcrumbs;
