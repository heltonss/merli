import React from 'react';
import Style from './Product.module.scss';

interface IOwnProps {
  price: number;
  title: string;
  region: string;
}

const Product: React.FC<IOwnProps> = ({ price, title, region }: IOwnProps) => {
  return (
    <div className={Style.container}>
      <div className={Style.image}>
        <img src="https://via.placeholder.com/180" alt={title} />
      </div>
      <div className={Style.info}>
        <span className={Style.price}>{price}</span>
        <p className={Style.title}>{title}</p>
      </div>
      <span className={Style.region}>{region}</span>
    </div>
  );
};

export default Product;
