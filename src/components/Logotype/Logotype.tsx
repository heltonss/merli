import Logo from 'assets/images/Logo_ML.png';
import Logo2x from 'assets/images/Logo_ML@2x.png';
import React from 'react';

interface IOwnProps {
  parentClassStyle?: string;
}

const Logotype = ({ parentClassStyle }: IOwnProps) => {
  return (
    <img
      className={parentClassStyle}
      src={Logo}
      alt="logotipo mercado livre"
      srcSet={`${Logo2x} 2x`}
    />
  );
};

export default Logotype;
