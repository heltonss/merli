import Logotype from 'components/Logotype/Logotype';
import Search from 'components/Search/Search';
import React, { Component } from 'react';
import Style from './Header.module.scss';

export class Header extends Component {
  render() {
    return (
      <div className={Style.container}>
        <div className={Style.containerSafe}>
          <Logotype parentClassStyle={Style.logotype} />
          <Search />
        </div>
      </div>
    );
  }
}

export default Header;
