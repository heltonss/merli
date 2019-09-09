import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Breadcrumbs.module.scss';

const Breadcrumbs: React.FC = () => {
  return (
    <div className={Style.container}>
      <Link className={Style.link} to="/">
        Busca
      </Link>
      <Link className={Style.link} to="/">
        smartphones
      </Link>
      <Link className={Style.link} to="/">
        mock sem funcionamento
      </Link>
    </div>
  );
};

export default Breadcrumbs;
