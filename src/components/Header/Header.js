/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.searchValueHeaderToLayout = this.searchValueHeaderToLayout.bind(this);
  }

  searchValueHeaderToLayout(newValue) {
    this.props.searchValueChangeL(newValue);
  }


  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation searchValueChangeH={this.searchValueHeaderToLayout} />
          <Link className={s.brand} to="/">
            <img
              src={logoUrl}
              srcSet={`${logoUrl} 2x`}
              width="64"
              height="64"
              alt="React"
            />
          <span className={s.brandTxt}>yaph</span>
          </Link>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>YAPH</h1>
            <p className={s.bannerDesc}>Finding forceful arguments made easy</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
