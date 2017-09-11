import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import history from '../../history';
import s from './Subjectitem.css';


class SubjectItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <p className={s.searchBarEmptyTitle}>
            Please enter something in the searchbar, or press backspace to go
            back to the news
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SubjectItem);
