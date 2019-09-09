import React from 'react';

interface IOwnProps {
  value: number;
}

const CurrencyFormat: React.FC<IOwnProps> = ({ value }: IOwnProps) => {
  const intl = new Intl.NumberFormat('es-AR', {
    currency: 'ARS',
    minimumFractionDigits: 0,
    style: 'currency',
  });

  return <span>{intl.format(value)}</span>;
};

export default CurrencyFormat;
