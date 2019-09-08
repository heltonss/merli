import React from 'react';
import Style from './Product.module.scss';

interface IOwnProps {
  price: number;
  title: string;
  region: string;
  thumbnail: string;
}

const Product: React.FC<IOwnProps> = ({ price, title, region, thumbnail }: IOwnProps) => {
  return (
    <div className={Style.container}>
      <div className={Style.image}>
        <img src={thumbnail} alt={title} />
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
