import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import history from '../../history';
import s from './SearchBar.css';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonVal: 'go',
      searchValue: '',
    };
  }

  handleSearch = event => {
    this.setState({
      searchValue : event.target.value
    });
  };

  handleGoClick = event => {

    if(this.state.searchValue != "") {

      history.push('/search');
      Search.setState({
        param1 : this.state.searchValue,
      });
    }else{
      history.push('/');
    }

    //do something with value
  }

  render() {
    return (
      <div className={s.sb}>
        <form method="get">
          <input type="text" onChange={this.handleSearch.bind(this.value)}/>
          <button type='submit' onClick={this.handleGoClick.bind(this)}>{this.state.buttonVal}</button>
        </form>
      </div>
    );
  }
}

export default withStyles(s)(SearchBar);
