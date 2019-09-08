import React from 'react';
import Button from '../Button/Button';
import Style from './Buy.module.scss';

interface IOwnProps {
  price: number;
  nameProduct: string;
  solds: string;
}

const Buy: React.FC<IOwnProps> = ({ solds, nameProduct, price }: IOwnProps) => {
  const buyProduct = () => {
    console.log('comprar produto');
  };
  return (
    <div className={Style.container}>
      <span className={Style.solds}>{solds}</span>
      <h1 className={Style.productName}>{nameProduct}</h1>
      <span className={Style.price}>{price}</span>
      <Button label={'Comprar'} func={buyProduct} />
    </div>
  );
};

export default Buy;
