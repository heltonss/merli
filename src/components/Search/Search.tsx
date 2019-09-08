import IconSearch from 'components/Icons/IconSearch/IconSearch';
import Input from 'components/Input/Input';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Creators as searchProducts } from 'store/ducks/search';
import Style from './Search.module.scss';

interface IOwnProps {
  searchProducts(product: string): void;
}

const Search: React.FC = (props: any) => {
  const [valueSearch, setValueSearch] = useState('');

  const getValueInput = (value: string) => {
    setValueSearch(value);
  };

  const search = () => {
    props.searchProducts(valueSearch);
  };

  return (
    <div className={Style.container}>
      <Input
        parentClassStyle={Style.input}
        type={'text'}
        placeholder={'Buscar produtos, marcas e muito mais...'}
        getValue={getValueInput}
        onEnter={search}
      />
      <IconSearch func={search} isRounded={true} />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(searchProducts, dispatch);

export default connect(
  undefined,
  mapDispatchToProps,
)(Search);
