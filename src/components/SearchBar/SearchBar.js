import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import history from '../../history';
import s from './SearchBar.css';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleBackSpace = this.handleBackSpace.bind(this);
  }

  handleChange(e) {
    const searchValue = e.target.value;
    this.props.searchValueChangeN(searchValue);
  }

  handleBackSpace(e) {
    if(e.keyCode===8){
      const searchValueBS = e.target.value;
      this.props.searchValueChangeN(searchValueBS);
    }
  }

  render() {
    return (
      <div className={s.sb}>
          <input type="text" placeholder="Search" onKeyDown={this.handleBackSpace} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default withStyles(s)(SearchBar);
