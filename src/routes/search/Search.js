import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: PropTypes.string.isRequired,
    };
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 hidden={this.props.searchValue === ''}>
            {this.props.title}
          </h1>
          <h2 hidden={this.props.searchValue == ''}>
            Searching for {this.props.searchValue}
          </h2>
          <div
            hidden={this.props.searchValue != ''}
            className={s.searchBarEmptyTitle}
          >
            Please enter something in the searchbar, or press backspace to go
            back to the news
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Search);
