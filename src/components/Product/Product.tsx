import CurrencyFormat from 'components/CurrencyFormat/CurrencyFormat';
import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Product.module.scss';

interface IOwnProps {
  id: string;
  price: number;
  title: string;
  region: string;
  thumbnail: string;
}

const Product: React.FC<IOwnProps> = ({ id, price, title, region, thumbnail }: IOwnProps) => {
  return (
    <Link to={`items/${id}`} className={Style.container}>
      <div className={Style.image}>
        <img src={thumbnail} alt={title} />
      </div>
      <div className={Style.info}>
        <span className={Style.price}>{<CurrencyFormat value={price} />}</span>
        <p className={Style.title}>{title}</p>
      </div>
      <span className={Style.region}>{region}</span>
    </Link>
  );
};

export default Product;
