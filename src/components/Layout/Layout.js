/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import history from '../../history';

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.HandleSearchValue = this.HandleSearchValue.bind(this);
    this.state = {
      children: PropTypes.node.isRequired,
      searchValue: PropTypes.string,
    };
  }

  HandleSearchValue(newValue) {
    this.setState({
      searchValue: newValue
    })
    const tempSearchValue = this.state.searchValue;
    if (tempSearchValue.length == 0) {
      history.push('/');
    }else{
      history.push('/search');
    }
  }

  render() {
    return (
      <div>
        <Header searchValueChangeL={this.HandleSearchValue}/>
        { React.Children.map(this.props.children, child => React.cloneElement(child, {searchValue: this.state.searchValue}))}
        <Feedback />
        <Footer />
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
