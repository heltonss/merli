import IconSearch from 'components/Icons/IconSearch/IconSearch';
import Input from 'components/Input/Input';
import React from 'react';
import Style from './Search.module.scss';

const Search: React.FC = () => {
  const getValueInput = (value: string) => {
    console.log('input ', value);
  };
  return (
    <div className={Style.container}>
      <Input
        parentClassStyle={Style.input}
        type={'text'}
        placeholder={'Buscar produtos, marcas e muito mais...'}
        getValue={getValueInput}
      />
      <IconSearch isRounded={true} />
    </div>
  );
};

export default Search;
